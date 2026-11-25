<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;idelalisib&quot;}]"></div>

# idelalisib

- **generic name:** idelalisib
- **ATC codes:** `L01EM01`, `L01XX47`
- **DrugBank:** [DB09054](https://go.drugbank.com/drugs/DB09054) · **PubChem:** [CID 11625818](https://pubchem.ncbi.nlm.nih.gov/compound/11625818)
- **molar mass:** 415.432 g/mol (C22H18FN7O) — DrugBank
- **groups:** approved, investigational

## About

Idelalisib is a protein kinase inhibitor used to treat various blood cancers, including chronic lymphocytic leukemia and non-Hodgkin lymphoma. The medication is taken orally in tablet form. It is authorised in the European Union for the treatment of lymphoma and leukemia.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5908266](https://www.wikidata.org/wiki/Q5908266), [Wikipedia](https://en.wikipedia.org/wiki/Idelalisib?oldid=1352106902) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.80).">human + animal</span> | [McLeod_2019_CD63](drugs/drug_idelalisib/pd_McLeod_2019_CD63.md) | CD63 activation ← Idelalisib · inhibition effect | — | McLeod RL et al., Characterizing Pharmacokinetic-Pharmaco…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.252551](https://doi.org/10.1124/jpet.118.252551) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:44 | 0:12 | 0/0/0 | 1/0/0 | 0/0/0 | 4,398/183 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jin_2016 | relevant | 10 | 2 | The paper describes a population PK model for idelalisib but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Jin_2016 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic model for idelalisib but does not investigate or report the impact of any specific gene variants or genotypes on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | McLeod_2019 | irrelevant | 1 | 0 | Idelalisib is mentioned as a clinical reference and for an in-vitro IC50, but no numeric disposition parameters are provided. |
| popPK | Montillo_2019 | irrelevant | 0 | 0 | This human trial reports quality-of-life outcomes, not quantitative pharmacokinetic disposition parameters. |
| popPK | Ramanathan_2016 | irrelevant | 1 | 0 | The paper is a narrative review summarizing the pharmacokinetic profile of idelalisib and does not provide specific quantitative disposition parameters (e.g., numerical values for CL, V, or half-life). |
| PGx | Ramanathan_2016 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics, drug-drug interactions, and special populations (hepatic/renal) but does not report any effect of specific gene variants or genotypes (pharmacogenomics) on idelalisib PK/PD. |
| popPK | Zimmerman_2023 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study and reports no idelalisib disposition parameters. |
| popPK | Zimmerman_2023_2 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on PI3Kδ inhibition and glucocorticoid synergy, containing no pharmacokinetic parameters (CL, V, etc.) for idelalisib. |
| PGx | Zimmerman_2023_2 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic interaction (synergy) between idelalisib and glucocorticoids and characterizes the molecular mechanism (GR phosphorylation), but it does not report a pharmacogenomic effect (i.e., a gene variant/genotype in the patient) modifying the PK or PD of idelalisib. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bidelalisib%5D&body=Drug%3A%20idelalisib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_idelalisib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
