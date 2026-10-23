<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;brimonidine&quot;}]"></div>

# brimonidine

- **generic name:** brimonidine
- **ATC codes:** `D11AX21`, `S01EA05`, `S01EA55`, `S01GA07`
- **DrugBank:** [DB00484](https://go.drugbank.com/drugs/DB00484) · **PubChem:** [CID 2435](https://pubchem.ncbi.nlm.nih.gov/compound/2435)
- **molar mass:** 292.135 g/mol (C11H10BrN5) — DrugBank
- **groups:** approved, investigational

## About

Brimonidine is an alpha-adrenergic agonist used to treat glaucoma and ocular hypertension, and topically for the skin condition rosacea. It is an approved medicine, with an authorised product in the European Union for skin use, and is widely used in eye care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q577377](https://www.wikidata.org/wiki/Q577377) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Menozzi_2018_EFS_evoked_contractions](drugs/drug_brimonidine/pd_Menozzi_2018_EFS_evoked_contractions.md) | EFS-evoked contractions ← brimonidine · direct Emax (saturable) effect | — | Menozzi A et al., Effects of selective α, Journal of veterinary pharm… (2018) | [10.1111/jvp.12470](https://doi.org/10.1111/jvp.12470) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=brimonidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `AOX1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (target), ADRA2C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:48 | 0:48 | 0/0/0 | 0/1/0 | 0/0/0 | 68,703/1,714 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tamhane_2021.pdf` | Tamhane M et al., Ocular Pharmacokinetics of Brimonidine…, The Journal of pharmacology… (2021) | popPK | 10 | [10.1124/jpet.120.000483](https://doi.org/10.1124/jpet.120.000483) | [34210753](https://pubmed.ncbi.nlm.nih.gov/34210753) | The paper reports a compartmental PK model for brimonidine in monkeys and humans, but the specific numeric parameter values (clearance, volume, rate constants) are not provided in the extracted text, likely residing in figures or tables not included. |
| `Durairaj_2014.pdf` | Durairaj C et al., Mechanism - based translational pharmac…, Pharmaceutical research (2014) | popPK | 8 | [10.1007/s11095-014-1311-9](https://doi.org/10.1007/s11095-014-1311-9) | [24549827](https://pubmed.ncbi.nlm.nih.gov/24549827) | The paper describes a mechanistic PKPD model for brimonidine in rabbits, but the abstract contains no numeric parameter values (CL, V, ka, etc.). |

<sub>queue written 2026-10-07 07:48 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belalcazar_2026 | irrelevant | 0 | 0 | This is a clinical efficacy trial assessing intraocular pressure reduction and tolerability, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Del_2022 | relevant | 5 | 3 | Study reports quantitative NCA parameters (AUC, t1/2, CL, V) for brimonidine in rabbits, but lacks volume of distribution and intercompartmental clearance values necessary for a full compartmental model. |
| popPK | Durairaj_2014 | relevant | 8 | 0 | The paper describes a mechanistic PKPD model for brimonidine in rabbits, but the abstract contains no numeric parameter values (CL, V, ka, etc.). |
| popPK | Inatani_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial measuring intraocular pressure reduction, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.) for brimonidine. |
| popPK | Kurko_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic pharmacology study analyzing receptor signaling pathways, not a pharmacokinetic study. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of brimonidine's effect on nitrite production in porcine tissue and does not report any pharmacokinetic parameters. |
| popPK | Martínez-Águila_2013 | irrelevant | 0 | 0 | The study investigates agomelatine, and brimonidine is used only as a comparator agent without any pharmacokinetic parameters reported for it. |
| popPK | Menozzi_2018 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamics study measuring receptor potency (pD2) in horse bronchi, not a pharmacokinetic study reporting disposition parameters like clearance or volume for brimonidine. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and signaling, not a pharmacokinetic study, and reports no disposition parameters for brimonidine. |
| popPK | Pham_2023 | irrelevant | 0 | 0 | The study is a comparative clinical trial of IOP-lowering efficacy (netarsudil vs. brimonidine), not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Piwnica_2014 | irrelevant | 0 | 0 | The study investigates pharmacodynamic properties (vasoconstriction and anti-inflammatory effects) and receptor selectivity, not pharmacokinetic parameters. |
| popPK | Schäfer_2002 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study of receptor interactions in rat hearts, not a pharmacokinetic study of brimonidine. |
| popPK | Sharif_2024 | irrelevant | 0 | 0 | The study focuses on omidenepag isopropyl, with brimonidine mentioned only as a co-administered comparator agent, and no pharmacokinetic parameters for brimonidine are reported. |
| popPK | Tamhane_2021 | relevant | 10 | 2 | The paper reports a compartmental PK model for brimonidine in monkeys and humans, but the specific numeric parameter values (clearance, volume, rate constants) are not provided in the extracted text, likely residing in figures or tables not included. |
| popPK | Wikberg-Matsson_2001 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of receptor-mediated vasoconstriction, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrimonidine%5D&body=Drug%3A%20brimonidine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brimonidine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
