<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;nalidixic acid&quot;}]"></div>

# nalidixic acid

- **generic name:** nalidixic acid
- **ATC codes:** `J01MB02`
- **DrugBank:** [DB00779](https://go.drugbank.com/drugs/DB00779) · **PubChem:** [CID 4421](https://pubchem.ncbi.nlm.nih.gov/compound/4421)
- **molar mass:** 232.2353 g/mol (C12H12N2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Nalidixic acid is a quinolone antibiotic that was used to treat urinary tract infections, including those caused by Escherichia coli. It has been withdrawn from use, so it is no longer available for treating patients.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q281082](https://www.wikidata.org/wiki/Q281082) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Srivastava_2020_M_tuberculosis_kill](drugs/drug_nalidixic_acid/pd_Srivastava_2020_M_tuberculosis_kill.md) | M. tuberculosis kill ← nalidixic acid · direct sigmoid Emax (Hill) effect | — | Srivastava S et al., Effect of specimen processing, growth s…, PloS one (2020) | [10.1371/journal.pone.0230927](https://doi.org/10.1371/journal.pone.0230927) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Suominen_2020_GI](drugs/drug_nalidixic_acid/pd_Suominen_2020_GI.md) | growth inhibition biomarker turnover ← nalidixic acid | — | Suominen EN et al., Investigating the short- and long-term…, Heliyon (2020) | [10.1016/j.heliyon.2020.e04232](https://doi.org/10.1016/j.heliyon.2020.e04232) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Suominen_2020_LI](drugs/drug_nalidixic_acid/pd_Suominen_2020_LI.md) | luminescence inhibition biomarker turnover ← nalidixic acid | — | Suominen EN et al., Investigating the short- and long-term…, Heliyon (2020) | [10.1016/j.heliyon.2020.e04232](https://doi.org/10.1016/j.heliyon.2020.e04232) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nalidixic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Aerobic bacterial DNA (inhibitor), TDO2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:36 | 0:46 | 0/0/0 | 2/0/0 | 0/0/0 | 56,274/2,085 | einfracz / qwen3.8-27b | 16 | 2/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Deza-Cruz_2023 | irrelevant | 0 | 0 | The paper reports antimicrobial resistance data for E. coli in pigs and does not contain any pharmacokinetic parameters for nalidixic acid. |
| popPK | Dodd_1989 | irrelevant | 0 | 0 | This is an in-vitro neurochemical study investigating receptor binding and neurotransmitter effects, not a pharmacokinetic study of nalidixic acid. |
| popPK | Kaniwa_1984 | irrelevant | 0 | 0 | The provided text is software metadata (GROBID) and contains no scientific content, pharmacokinetic data, or drug information. |
| popPK | MacKinnon_2018 | irrelevant | 0 | 0 | The study analyzes antimicrobial resistance (MIC) data for E. coli isolates, not pharmacokinetic parameters of nalidixic acid. |
| popPK | Murata_1989 | irrelevant | 3 | 0 | The paper focuses on the development of computer programs and only qualitatively discusses nalidixic acid in the context of multi-fraction absorption without providing specific numeric PK parameters in the evidence. |
| popPK | Park_2014 | irrelevant | 0 | 0 | The study is an in vitro/in vivo efficacy assay against a parasite, not a pharmacokinetic study of nalidixic acid. |
| popPK | Sakal_2000 | irrelevant | 0 | 0 | Nalidixic acid is used only as an induction agent for protein expression in E. coli; no pharmacokinetic parameters are reported. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GABA-A receptor binding interactions, and nalidixic acid is only a comparator antibacterial agent with no pharmacokinetic parameters reported. |
| popPK | Srivastava_2020 | irrelevant | 0 | 0 | The study is an in-vitro microbiology investigation of Mycobacterium tuberculosis diagnosis and nalidixic acid's antimicrobial efficacy, not a pharmacokinetic study. |
| popPK | Suominen_2020 | irrelevant | 0 | 0 | The paper reports in-vitro antibacterial toxicity (EC50) of nalidixic acid against E. coli, not pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| popPK | Talwar_2008 | irrelevant | 0 | 0 | The paper describes a polyherbal microbicide's in-vitro antimicrobial activity, with nalidixic acid mentioned only as a reference for bacterial resistance, and contains no pharmacokinetic data. |
| popPK | Wythe_2022 | irrelevant | 0 | 0 | The study is a food safety analysis of antimicrobial treatments on chicken thighs, using nalidixic acid only as a marker for antibiotic resistance in Salmonella, not as a subject for pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnalidixic_acid%5D&body=Drug%3A%20nalidixic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nalidixic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
