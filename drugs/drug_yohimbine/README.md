<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;yohimbine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Yohimbine_Dimaio2011v2_reference&quot;,&quot;label&quot;:&quot;Dimaio_2011_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_yohimbine/Yohimbine_Dimaio2011v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# yohimbine

- **generic name:** yohimbine
- **ATC codes:** `G04BE04`
- **DrugBank:** [DB01392](https://go.drugbank.com/drugs/DB01392) · **PubChem:** [CID 8969](https://pubchem.ncbi.nlm.nih.gov/compound/8969)
- **molar mass:** 354.4427 g/mol (C21H26N2O3) — DrugBank
- **groups:** approved, investigational, vet_approved, withdrawn

## About

Yohimbine is an alpha-2 blocker used for erectile dysfunction and hypoactive sexual desire disorder. It is classified for erectile dysfunction in urological drug groups and has approved and veterinary-approved status, though some products have been withdrawn; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412226](https://www.wikidata.org/wiki/Q412226) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| yohimbine | parent | 354.443 | C21H26N2O3 | DrugBank | [8969](https://pubchem.ncbi.nlm.nih.gov/compound/8969) | Dimaio_2011_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:19 | 2:05 | 1/0/0 | 0/0/0 | 0/0/0 | 135,415/4,851 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Dimaio_2011_2_reference](drugs/drug_yohimbine/Yohimbine_Dimaio2011v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Dimaio Knych HK et al., Pharmacokinetics of yohimbine following…, Journal of veterinary pharm… (2011) | [10.1111/j.1365-2885.2010.01194.x](https://doi.org/10.1111/j.1365-2885.2010.01194.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=yohimbine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (target), ADRA2C (target), DRD2 (target), DRD3 (target), HTR1A (partial agonist), HTR1B (partial agonist), HTR1D (partial agonist), HTR2A (target), HTR2B (target), HTR2C (target), KCNJ1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 222 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dimaio_2011.pdf` | Dimaio Knych HK et al., Pharmacokinetics and pharmacodynamics o…, Journal of veterinary pharm… (2011) | popPK | 10 | [10.1111/j.1365-2885.2010.01234.x](https://doi.org/10.1111/j.1365-2885.2010.01234.x) | [20950351](https://pubmed.ncbi.nlm.nih.gov/20950351) | The study reports pharmacokinetics for yohimbine in horses using compartmental analysis, but specific clearance or volume parameters are not explicitly listed in the provided text, only peak concentrations. |
| `Dimaio_2011_2.pdf` | Dimaio Knych HK et al., Pharmacokinetics of yohimbine following…, Journal of veterinary pharm… (2011) | popPK | 10 | [10.1111/j.1365-2885.2010.01194.x](https://doi.org/10.1111/j.1365-2885.2010.01194.x) | [21219345](https://pubmed.ncbi.nlm.nih.gov/21219345) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for yohimbine in horses with values provided in the text. |
| `Guthrie_1990.pdf` | Guthrie SK et al., Yohimbine bioavailability in humans, European journal of clinica… (1990) | popPK | 10 | [10.1007/BF00315421](https://doi.org/10.1007/BF00315421) | [2076728](https://pubmed.ncbi.nlm.nih.gov/2076728) | The evidence explicitly reports quantitative pharmacokinetic parameters for yohimbine in humans, including two-compartment model half-lives, intravenous and oral clearance, and bioavailability. |
| `Sturgill_1997.pdf` | Sturgill MG et al., Yohimbine elimination in normal volunte…, Journal of cardiovascular p… (1997) | popPK | 9 | [10.1097/00005344-199706000-00001](https://doi.org/10.1097/00005344-199706000-00001) | [9234649](https://pubmed.ncbi.nlm.nih.gov/9234649) | The paper is a human PK study of yohimbine but the provided evidence contains only qualitative descriptions of compartmental behavior without specific numeric parameter values (CL, V, t1/2). |
| `Knych_2012.pdf` | Knych HK et al., The effects of yohimbine on the pharmac…, Veterinary anaesthesia and… (2012) | popPK | 7 | [10.1111/j.1467-2995.2011.00690.x](https://doi.org/10.1111/j.1467-2995.2011.00690.x) | [22405129](https://pubmed.ncbi.nlm.nih.gov/22405129) | The study reports quantitative pharmacokinetic parameters (Clearance and Volume of distribution) for yohimbine in horses, specifically noting changes when co-administered with detomidine. |

<sub>queue written 2026-10-07T09:17:46.215660+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidi_2022 | irrelevant | 0 | 0 | The study is a pharmacological investigation of ginger extract's effect on GI motility where yohimbine is used only as a comparator drug, with no pharmacokinetic parameters reported. |
| popPK | Alba-Betancourt_2019 | irrelevant | 0 | 0 | The study investigates the pharmacological actions of tilifodiolide, where yohimbine is only used as a non-specific antagonist/co-administered agent to evaluate mechanisms. |
| popPK | Arun_2019 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of dexmedetomidine on human umbilical arteries where yohimbine is used only as a pharmacological tool (antagonist) to block alpha-2 receptors, not as the subject of pharmacokinetic analysis. |
| popPK | Choi_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic pain model in rats where yohimbine is used as a mechanism-based antagonist, not a pharmacokinetic study with disposition parameters. |
| popPK | Choi_2023 | irrelevant | 0 | 0 | The study focuses on the analgesic and anti-inflammatory effects of Rubus occidentalis extract in rats, using yohimbine only as a receptor antagonist tool to investigate mechanisms, without reporting any pharmacokinetic parameters for yohimbine. |
| popPK | Dimaio_2011 | relevant | 10 | 3 | The study reports pharmacokinetics for yohimbine in horses using compartmental analysis, but specific clearance or volume parameters are not explicitly listed in the provided text, only peak concentrations. |
| popPK | Limbird_1983 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro receptor binding study using yohimbine only as a radiolabeled ligand, containing no pharmacokinetic data. |
| popPK | Ma_2019 | irrelevant | 0 | 0 | The study is a pharmacological investigation of a tyramine receptor in an insect where yohimbine serves only as a test antagonist, with no pharmacokinetic parameters reported. |
| popPK | Merlo_1989 | irrelevant | 0 | 0 | Yohimbine is used only as a behavioral probe (anxiogenic agent) in a rat study, with no pharmacokinetic parameters reported. |
| popPK | Njunge_1991 | irrelevant | 0 | 0 | The study evaluates yohimbine as a behavioral agent in mice and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) or models for yohimbine. |
| popPK | Redfern_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacology of RS-15385-197 in rats, using yohimbine only as a comparator agent in in vitro tests without reporting any yohimbine pharmacokinetic parameters. |
| popPK | Rukachaisirikul_2017 | irrelevant | 0 | 0 | The paper is a phytochemical study isolating compounds from plant roots and reports in-vitro biological activities, but contains no pharmacokinetic parameters or models for yohimbine. |
| popPK | Schultz_2024 | irrelevant | 0 | 0 | The study is a medicinal chemistry paper focused on the synthesis and antiplasmodial activity of yohimbine derivatives, containing no pharmacokinetic data or disposition parameters. |
| popPK | Sturgill_1997 | relevant | 9 | 2 | The paper is a human PK study of yohimbine but the provided evidence contains only qualitative descriptions of compartmental behavior without specific numeric parameter values (CL, V, t1/2). |
| popPK | Vázquez_2006 | irrelevant | 0 | 0 | The study is an in vitro receptor characterization study where yohimbine is used only as a ligand for binding assays, not as a subject drug for pharmacokinetic analysis. |
| popPK | Wong_1992 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study on isolated rat aortae investigating clonidine, with yohimbine used only as a pharmacological tool/antagonist, not a PK study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:17 UTC</sub>
