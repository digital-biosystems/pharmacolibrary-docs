<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ximelagatran&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ximelagatran_Eriksson2003_reference&quot;,&quot;label&quot;:&quot;Eriksson_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ximelagatran/Ximelagatran_Eriksson2003_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ximelagatran

- **generic name:** ximelagatran
- **ATC codes:** `B01AE05`
- **DrugBank:** [DB04898](https://go.drugbank.com/drugs/DB04898) · **PubChem:** [CID 9574101](https://pubchem.ncbi.nlm.nih.gov/compound/9574101)
- **molar mass:** 473.5652 g/mol (C24H35N5O5) — DrugBank
- **groups:** approved, withdrawn

## About

Ximelagatran is an anticoagulant (direct thrombin inhibitor) that was studied extensively as a possible replacement for warfarin, including for atrial fibrillation. It is no longer used: it was withdrawn from the market, and its marketing application in the European Union was withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3570984](https://www.wikidata.org/wiki/Q3570984) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ximelagatran | parent | 473.565 | C24H35N5O5 | DrugBank | [9574101](https://pubchem.ncbi.nlm.nih.gov/compound/9574101) | Eriksson_2003 |
| melagatran | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:05 | 0:22 | 0/1/1 | 1/0/0 | 0/0/0 | 23,899/2,764 | einfracz / qwen3.8-27b | 2 | 1/1 | 1/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Eriksson_2003_reference](drugs/drug_ximelagatran/Ximelagatran_Eriksson2003_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Eriksson UG et al., Pharmacokinetics of melagatran and the…, Clinical pharmacokinetics (2003) | [10.2165/00003088-200342070-00006](https://doi.org/10.2165/00003088-200342070-00006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (partly confirmed, agreement 0.455). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cullberg_2005_reference](drugs/drug_ximelagatran/Ximelagatran_Cullberg2005_reference.md) | — | 1-compartment (no model) | 0 | Cullberg M et al., Pharmacokinetics of ximelagatran and re…, Clinical pharmacology and t… (2005) | [10.1016/j.clpt.2004.11.001](https://doi.org/10.1016/j.clpt.2004.11.001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Eriksson_2003_APTT](drugs/drug_ximelagatran/pd_Eriksson_2003_APTT.md) | activated partial thromboplastin time ← melagatran · direct log-linear effect | — | Eriksson UG et al., Pharmacokinetics of melagatran and the…, Clinical pharmacokinetics (2003) | [10.2165/00003088-200342070-00006](https://doi.org/10.2165/00003088-200342070-00006) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ximelagatran).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: F2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 29 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bergqvist_2004.pdf` | Bergqvist D et al., Pharmacokinetics, preliminary efficacy…, Clinical drug investigation (2004) | popPK | 10 | [10.2165/00044011-200424030-00001](https://doi.org/10.2165/00044011-200424030-00001) | [17516699](https://pubmed.ncbi.nlm.nih.gov/17516699) | Reports the active metabolite melagatran's pharmacokinetics (one-compartment model, bioavailability) following ximelagatran administration in humans, providing specific numeric values in the text. |
| `Cullberg_2005.pdf` | Cullberg M et al., Pharmacokinetics of ximelagatran and re…, Clinical pharmacology and t… (2005) | popPK | 10 | [10.1016/j.clpt.2004.11.001](https://doi.org/10.1016/j.clpt.2004.11.001) | [15903126](https://pubmed.ncbi.nlm.nih.gov/15903126) | The abstract reports explicit quantitative population PK parameters for melagatran (ximelagatran's active metabolite), including mean clearance (27.3 L/h), volume of distribution (176 L), and interpatient variability percentages. |
| `Eriksson_2003.pdf` | Eriksson UG et al., Pharmacokinetics of melagatran and the…, Clinical pharmacokinetics (2003) | popPK | 10 | [10.2165/00003088-200342070-00006](https://doi.org/10.2165/00003088-200342070-00006) | [12844328](https://pubmed.ncbi.nlm.nih.gov/12844328) | The paper reports quantitative population pharmacokinetic parameters (clearance, volume of distribution) for melagatran, the active metabolite of ximelagatran, derived from ximelagatran administration in humans. |
| `Bååthe_2006.pdf` | Bååthe S et al., Population pharmacokinetics of melagatr…, Clinical pharmacokinetics (2006) | popPK | 9 | [10.2165/00003088-200645080-00004](https://doi.org/10.2165/00003088-200645080-00004) | [16884319](https://pubmed.ncbi.nlm.nih.gov/16884319) | The study reports population pharmacokinetic parameters for melagatran (the active metabolite of ximelagatran) in humans, but specific numeric values for clearance, volume, or half-life are described qualitatively or via variability percentages without explicit central estimates in the provided text. |
| `Ufer_2005.pdf` | Ufer M, Comparative pharmacokinetics of vitamin…, Clinical pharmacokinetics (2005) | pgx | 8 | [10.2165/00003088-200544120-00003](https://doi.org/10.2165/00003088-200544120-00003) | [16372822](https://www.ncbi.nlm.nih.gov/pubmed/16372822) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Bredberg_2003.pdf` | Bredberg E et al., Ximelagatran, an oral direct thrombin i…, Clinical pharmacokinetics (2003) | pgx | 7 | [10.2165/00003088-200342080-00005](https://doi.org/10.2165/00003088-200342080-00005) | [12846597](https://www.ncbi.nlm.nih.gov/pubmed/12846597) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-14T19:04:54.007933+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergqvist_2004 | relevant | 10 | 4 | Reports the active metabolite melagatran's pharmacokinetics (one-compartment model, bioavailability) following ximelagatran administration in humans, providing specific numeric values in the text. |
| PGx | Bredberg_2003 | not_relevant | 0 | 0 | The paper investigates CYP-mediated drug-drug interactions, not pharmacogenomic effects (gene variants). |
| PD | Busti_2004 | not_relevant | 1 | 0 | The text is a qualitative review of ximelagatran's clinical status and does not report any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Bååthe_2006 | relevant | 9 | 3 | The study reports population pharmacokinetic parameters for melagatran (the active metabolite of ximelagatran) in humans, but specific numeric values for clearance, volume, or half-life are described qualitatively or via variability percentages without explicit central estimates in the provided text. |
| PGx | Clement_2003 | not_relevant | 0 | 0 | The paper characterizes in vitro biotransformation mechanisms but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Daly_2010 | not_relevant | 0 | 0 | The text discusses ximelagatran only in the context of HLA gene associations with drug-induced liver injury (DILI), not pharmacokinetic or pharmacodynamic parameters. |
| PD | Dobesh_2004 | not_relevant | 1 | 0 | The text is a qualitative introduction/review of ximelagatran's advantages over warfarin and does not contain any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Fontana_2014 | not_relevant | 2 | 0 | The paper mentions genetic associations (HLA) for ximelagatran hepatotoxicity in a general review context but does not report quantitative PK/PD parameter changes or fitted effect sizes. |
| PGx | Fröhlich_2005 | not_relevant | 0 | 0 | The paper investigates the metabolism of a model substrate (benzamidoxime) and mentions ximelagatran only as a contextual example of a drug class, without reporting any gene-specific effects on ximelagatran's PK or PD. |
| PD | Gulseth_2005 | not_relevant | 1 | 0 | The text is a general review summarizing clinical trial outcomes and basic PK properties (half-life) but does not report specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves. |
| PD | Hamaad_2003 | not_relevant | 0 | 0 | The text is a qualitative summary of the METHRO trials discussing clinical efficacy and safety, but it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| PD | Helft_2006 | not_relevant | 0 | 0 | The text is a general review of thrombosis research in 2005 and mentions ximelagatran's clinical trials and safety issues, but it contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| PGx | Helft_2006 | not_relevant | 0 | 0 | The text is a general review of 2005 thrombosis literature; it mentions ximelagatran's clinical trials and toxicity but does not report any specific gene variant's effect on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Keisu_2010 | not_relevant | 2 | 5 | The paper reports an association between MHC alleles and liver injury (ALT elevation), which is an adverse event/toxicity marker, not a change in standard pharmacokinetic (PK) parameters like clearance or volume of distribution, nor a pharmacodynamic (PD) parameter like INR or anti-Xa activity. |
| PGx | Kindmark_2008 | not_relevant | 1 | 0 | The study investigates the pharmacogenetic basis of an adverse event (immune-mediated elevated ALAT) rather than standard pharmacokinetic or pharmacodynamic parameters. |
| PGx | Nowak_2002 | not_relevant | 0 | 0 | The text provides a general pharmacological rationale for ximelagatran and does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| PGx | Russmann_2010 | not_relevant | 2 | 0 | The paper is a review on drug-induced liver injury (DILI) that mentions HLA variants as risk factors for hepatotoxicity with ximelagatran, but it does not report pharmacokinetic or pharmacodynamic parameter changes. |
| PD | Tribout_2007 | not_relevant | 1 | 0 | The paper is a qualitative review comparing clinical trial outcomes (efficacy/safety) based on administration timing, without reporting any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for ximelagatran. |
| PGx | Ufer_2005 | not_relevant | 0 | 0 | The paper discusses warfarin, phenprocoumon, and acenocoumarol, and only mentions ximelagatran as background context without reporting any pharmacogenomic data for it. |
| PD | Yoshida_2006 | not_relevant | 2 | 0 | The paper is a systematic review comparing clinical outcomes (VTE rates) between fixed doses of ximelagatran and warfarin; it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:04 UTC</sub>
