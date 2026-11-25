<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;pirbuterol&quot;}]"></div>

# pirbuterol

- **generic name:** pirbuterol
- **ATC codes:** `R03AC08`, `R03CC07`
- **DrugBank:** [DB01291](https://go.drugbank.com/drugs/DB01291) · **PubChem:** [CID 4845](https://pubchem.ncbi.nlm.nih.gov/compound/4845)
- **molar mass:** 240.2988 g/mol (C12H20N2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Pirbuterol is a short-acting beta-2 adrenergic agonist used to treat asthma. It is administered via inhalation using a metered-dose inhaler or orally as a syrup. The drug has been withdrawn from use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1236526](https://www.wikidata.org/wiki/Q1236526), [Wikipedia](https://en.wikipedia.org/wiki/Pirbuterol?oldid=1336268534) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Tinkelman_1992_FEV1](drugs/drug_pirbuterol/pd_Tinkelman_1992_FEV1.md) | FEV1 ← pirbuterol · stimulation effect | — | Tinkelman DG et al., Effect of increasing dosage of an inhal…, Annals of allergy (1992) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:42 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 3,621/163 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beumer_1979 | irrelevant | 0 | 0 | The study is a clinical pharmacodynamic trial evaluating bronchodilator activity and safety, containing no pharmacokinetic parameters (e.g., clearance, volume, half-life) for pirbuterol. |
| PGx | Beumer_1979 | not_relevant | 0 | 0 | The study compares pharmacodynamic responses to different beta-agonists in a general asthmatic population without analyzing genetic variants or reporting pharmacogenomic effects. |
| popPK | Brès_1985 | irrelevant | 1 | 0 | The paper is a general review of beta-adrenergic metabolism that only lists the percentage of unchanged drug in plasma (~30% for pirbuterol) without providing quantitative disposition parameters like clearance, volume, or half-life. |
| PGx | Brès_1985 | not_relevant | 1 | 0 | The paper discusses general metabolism and mentions genetic factors causing variability, but does not report a specific pharmacogenomic effect of a gene variant on pirbuterol PK/PD. |
| popPK | Canepa-Anson_1981 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PGx | Canepa-Anson_1981 | not_relevant | 0 | 0 | The paper describes single-dose and dose-response studies for pirbuterol in chronic heart failure but does not report any pharmacogenomic effects or genotype-based differences in PK/PD parameters. |
| popPK | Chanda_2026 | irrelevant | 0 | 0 | The paper is an in silico study on KRAS inhibitors and does not report pharmacokinetic parameters for pirbuterol. |
| PGx | Chanda_2026 | not_relevant | 0 | 0 | The paper focuses on in silico binding of pirbuterol to KRAS mutants for pancreatic cancer, not on pharmacogenomic effects on pirbuterol's PK/PD. |
| popPK | Constantine_1979 | irrelevant | 5 | 0 | While the paper studies pirbuterol PK in dogs, the provided evidence contains no quantitative disposition parameters (CL, V, etc.), only qualitative description of time to max concentration. |
| PGx | Constantine_1979 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in dogs and contains no information regarding human gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Grassi_1986 | irrelevant | 0 | 0 | The paper is a narrative review of oral beta 2-agonists and post-marketing surveillance of clenbuterol, containing no quantitative pharmacokinetic parameters for pirbuterol. |
| PGx | Grassi_1986 | not_relevant | 0 | 0 | The paper is a general review of oral beta-2 agonists and discusses post-marketing surveillance for clenbuterol, but it does not report any pharmacogenomic effects on PK or PD parameters for pirbuterol. |
| popPK | Hoffarth_1990 | irrelevant | 0 | 0 | The study measures respiratory function (bronchodilation, FEV1) rather than pharmacokinetic parameters (CL, V, t1/2) for pirbuterol. |
| PGx | Hoffarth_1990 | not_relevant | 0 | 0 | The study evaluates the comparative efficacy of pirbuterol and salbutamol in a general patient population and does not report any pharmacogenomic effects based on gene variants or genotypes. |
| popPK | Leier_1982 | irrelevant | 3 | 0 | The study reports hemodynamic and pharmacodynamic effects of intravenous pirbuterol and qualitative plasma concentration relationships, but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) or a PK model. |
| PGx | Leier_1982 | not_relevant | 0 | 0 | The study investigates the hemodynamic effects of intravenous pirbuterol in normal men but does not report any pharmacogenomic analysis linking gene variants to PK or PD parameters. |
| popPK | MacNee_1983 | irrelevant | 0 | 0 | The study focuses on acute pulmonary hemodynamic effects and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life for pirbuterol. |
| PGx | MacNee_1983 | not_relevant | 0 | 0 | The study investigates the clinical efficacy of pirbuterol in patients but contains no pharmacogenomic data or gene variant information. |
| popPK | Mohamed_1985 | irrelevant | 0 | 0 | The paper describes analytical methods (fluorometric and spectrophotometric) for assaying pirbuterol in dosage forms and does not report any pharmacokinetic parameters. |
| PGx | Mohamed_1985 | not_relevant | 0 | 0 | The paper describes analytical methods for quantifying pirbuterol in dosage forms and contains no information on genetics or pharmacogenomics. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | The study focuses on the relationship between clinical signs and lung function parameters (physiological response) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for pirbuterol. |
| PGx | Robinson_2000 | not_relevant | 0 | 0 | The paper is a clinical trial assessing the relationship between clinical scores and lung function parameters in horses treated with pirbuterol, containing no genetic or pharmacogenomic data. |
| popPK | Tinkelman_1992 | irrelevant | 0 | 0 | The study reports clinical pharmacodynamic endpoints (pulmonary function, tremor, cardiovascular indices) rather than quantitative pharmacokinetic parameters (CL, V, ka, etc.) for pirbuterol. |
| PGx | Tinkelman_1992 | not_relevant | 0 | 0 | The study evaluates dose-response relationships and safety profiles of pirbuterol, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Weber_1982 | irrelevant | 0 | 0 | The study is a clinical trial assessing therapeutic efficacy in chronic cardiac failure and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Weber_1982 | not_relevant | 0 | 0 | The paper reports clinical efficacy and side effects of pirbuterol in cardiac failure patients but does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpirbuterol%5D&body=Drug%3A%20pirbuterol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pirbuterol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
