<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;triamterene&quot;}]"></div>

# triamterene

- **generic name:** triamterene
- **ATC codes:** `C03DB02`
- **DrugBank:** [DB00384](https://go.drugbank.com/drugs/DB00384) · **PubChem:** [CID 5546](https://pubchem.ncbi.nlm.nih.gov/compound/5546)
- **molar mass:** 253.2626 g/mol (C12H11N7) — DrugBank
- **groups:** approved

## About

Triamterene is a potassium-sparing diuretic used to treat high blood pressure, fluid buildup, and low potassium levels. It is an approved medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q221520](https://www.wikidata.org/wiki/Q221520) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| triamterene | parent | 253.263 | C12H11N7 | DrugBank | [5546](https://pubchem.ncbi.nlm.nih.gov/compound/5546) | Hamid_2000 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| ka | kabs | 2.68 | 1/h | 2.68 hr(-1) | rabbits | &gt;=6 | rabbit | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Hamid_2000_reference](drugs/drug_triamterene/Triamterene_Hamid2000_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Hamid_2000_reference](drugs/drug_triamterene/Triamterene_Hamid2000_reference.md) | — | 1-compartment (no model) | 2 | Hamid O et al., Triamterene measurements in the aqueous…, Journal of ocular pharmacol… (2000) | [10.1089/jop.2000.16.565](https://doi.org/10.1089/jop.2000.16.565) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Diembeck_1982_reference](drugs/drug_triamterene/Triamterene_Diembeck1982_reference.md) | — | 1-compartment (no model) | 0 | Diembeck W et al., [Pharmacokinetics of xipamide and triam…, Arzneimittel-Forschung (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schuhmacher_1983_PDE](drugs/drug_triamterene/pd_Schuhmacher_1983_PDE.md) | myocardial phosphodiesterase ← triamterene · direct Emax (saturable) effect | — | Schuhmacher P et al., The effect of triamterene on myocardial…, European journal of pharmac… (1983) | [10.1016/0014-2999(83)90268-6](https://doi.org/10.1016/0014-2999(83)90268-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schuhmacher_1983_inotropic_effect](drugs/drug_triamterene/pd_Schuhmacher_1983_inotropic_effect.md) | inotropic effect ← triamterene · direct Emax (saturable) effect | — | Schuhmacher P et al., The effect of triamterene on myocardial…, European journal of pharmac… (1983) | [10.1016/0014-2999(83)90268-6](https://doi.org/10.1016/0014-2999(83)90268-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=triamterene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SCNN1A (inhibitor), SCNN1B (inhibitor), SCNN1D (inhibitor), SCNN1G (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:16 | 3:57 | 1/1/0 | 1/0/0 | 0/0/0 | 63,148/10,090 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hasegawa_1982.pdf` | Hasegawa J et al., Pharmacokinetics of triamterene and its…, Journal of pharmacokinetics… (1982) | popPK | 10 | [10.1007/BF01059034](https://doi.org/10.1007/BF01059034) | [7166735](https://pubmed.ncbi.nlm.nih.gov/7166735) | The study reports a compartmental PK model for triamterene in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Hamid_2000.pdf` | Hamid O et al., Triamterene measurements in the aqueous…, Journal of ocular pharmacol… (2000) | popPK | 9 | [10.1089/jop.2000.16.565](https://doi.org/10.1089/jop.2000.16.565) | [11132903](https://pubmed.ncbi.nlm.nih.gov/11132903) | The study reports quantitative kinetic parameters (absorption rate, elimination rate, half-life) for triamterene in rabbits. |
| `Diembeck_1982.pdf` | Diembeck W et al., [Pharmacokinetics of xipamide and triam…, Arzneimittel-Forschung (1982) | popPK | 8 |  | [6891256](https://pubmed.ncbi.nlm.nih.gov/6891256) | The study reports quantitative pharmacokinetic parameters (terminal elimination half-life and peak urine elimination rates) for triamterene in healthy volunteers. |
| `Möhrke_1997.pdf` | Möhrke W et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1997) | pd | 5 |  | [9352394](https://www.ncbi.nlm.nih.gov/pubmed/9352394) | metadata signals extractable PD data (Emax) |
| `Schuhmacher_1983.pdf` | Schuhmacher P et al., The effect of triamterene on myocardial…, European journal of pharmac… (1983) | pd | 4 | [10.1016/0014-2999(83)90268-6](https://doi.org/10.1016/0014-2999(83)90268-6) | [6321204](https://www.ncbi.nlm.nih.gov/pubmed/6321204) | metadata signals extractable PD data (IC50) |
| `Yamreudeewong_2003.pdf` | Yamreudeewong W et al., Potentially significant drug interactio…, Drug safety (2003) | pgx | 7 | [10.2165/00002018-200326060-00004](https://doi.org/10.2165/00002018-200326060-00004) | [12688833](https://www.ncbi.nlm.nih.gov/pubmed/12688833) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-06 19:13 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Brogden_1995 | not_relevant | 0 | 0 | The text consists of a list of references and errata regarding streptokinase, thrombolytic therapy, and other drugs, with no mention of triamterene or pharmacogenomic effects. |
| PGx | Corvol_1997 | not_relevant | 0 | 0 | The paper discusses the molecular genetics of hypertension and mentions triamterene only as a treatment for Liddle's syndrome, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Fuhr_2005 | not_relevant | 0 | 0 | The paper identifies CYP1A2 as the enzyme metabolizing triamterene using in vitro microsomes but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Hasegawa_1982 | relevant | 10 | 2 | The study reports a compartmental PK model for triamterene in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Ke_2015 | not_relevant | 2 | 1 | The paper reports a clinical response (reduced attack frequency) to triamterene in a specific genotype, but does not report changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, receptor binding, specific biomarker levels) of the drug itself. |
| popPK | Kipnowski_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion transport in frog skin, not a pharmacokinetic study reporting disposition parameters for triamterene. |
| PD | Kipnowski_1986 | not_relevant | 4 | 2 | The paper describes dose-dependent effects and qualitative binding characteristics (Hill coefficient &lt; 1) for a triamterene derivative (RPH 2823) in an in vitro model, but does not provide specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for triamterene itself. |
| popPK | Möhrke_1997 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| popPK | Orr-Burks_2021 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy and cytotoxicity assessment of triamterene, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Priewer_1996 | irrelevant | 0 | 0 | The study investigates renal excretion and pharmacodynamic potency (ED50/Emax) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Schuhmacher_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition and pharmacodynamics, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Yamreudeewong_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving triamterene but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriamterene%5D&body=Drug%3A%20triamterene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_triamterene/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 19:13 UTC</sub>
