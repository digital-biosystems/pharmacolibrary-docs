<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;olodaterol&quot;}]"></div>

# olodaterol

- **generic name:** olodaterol
- **ATC codes:** `R03AC19`, `R03AL06`
- **DrugBank:** [DB09080](https://go.drugbank.com/drugs/DB09080) · **PubChem:** [CID 11504295](https://pubchem.ncbi.nlm.nih.gov/compound/11504295)
- **molar mass:** 386.448 g/mol (C21H26N2O5) — DrugBank
- **groups:** approved, investigational

## About

Olodaterol is an inhaled long-acting beta-2 agonist used as a bronchodilator for obstructive airway diseases such as COPD. It is an approved medicine, available alone and in fixed combinations with anticholinergics, and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7088466](https://www.wikidata.org/wiki/Q7088466) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| olodaterol | parent | 386.448 | C21H26N2O5 | DrugBank | [11504295](https://pubchem.ncbi.nlm.nih.gov/compound/11504295) | Borghardt_2016, Borghardt_2016_2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Borghardt_2016_reference](drugs/drug_olodaterol/Olodaterol_Borghardt2016_reference.md) | — | 1-compartment (no model) | 3 | Borghardt JM et al., Investigating pulmonary and systemic ph…, British journal of clinical… (2016) | [10.1111/bcp.12780](https://doi.org/10.1111/bcp.12780) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Borghardt_2016_2_reference](drugs/drug_olodaterol/Olodaterol_Borghardt2016v2_reference.md) | — | 1-compartment (no model) | 3 | Borghardt JM et al., Model-based evaluation of pulmonary pha…, British journal of clinical… (2016) | [10.1111/bcp.12999](https://doi.org/10.1111/bcp.12999) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Calzetta_2017_inhibition_of_bronchial_contractility_cholinergic_contractile_tone](drugs/drug_olodaterol/pd_Calzetta_2017_inhibition_of_bronchial_contractility_choliner.md) | inhibition of bronchial contractility (cholinergic contractile tone) ← olodaterol · direct sigmoid Emax (Hill) effect | — | Calzetta L et al., Pharmacological characterization of the…, COPD (2017) | [10.1080/15412555.2017.1344627](https://doi.org/10.1080/15412555.2017.1344627) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Bouyssou_2010_hbeta_2_AR](drugs/drug_olodaterol/pd_Bouyssou_2010_hbeta_2_AR.md) | beta2-adrenoceptor agonist response (cAMP accumulation) ← olodaterol · direct sigmoid Emax (Hill) effect | — | Bouyssou T et al., Pharmacological characterization of olo…, The Journal of pharmacology… (2010) | [10.1124/jpet.110.167007](https://doi.org/10.1124/jpet.110.167007) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Calzetta_2017_inhibition_of_bronchial_contractility_tiotropium_plus_olodaterol_5_5_combination](drugs/drug_olodaterol/pd_Calzetta_2017_inhibition_of_bronchial_contractility_tiotropi.md) | inhibition of bronchial contractility (tiotropium plus olodaterol 5:5 combination) ← tiotropium plus olodaterol (5:5) · direct sigmoid Emax (Hill) effect | — | Calzetta L et al., Pharmacological characterization of the…, COPD (2017) | [10.1080/15412555.2017.1344627](https://doi.org/10.1080/15412555.2017.1344627) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gong_2022_trough_FEV1](drugs/drug_olodaterol/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← olodaterol/tiotropium (fixed-dose combination) · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=olodaterol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRB2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:21 | 1:43 | 0/2/0 | 2/1/0 | 0/0/0 | 81,357/5,884 | ollama / glm-5.3-flash | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Borghardt_2016.pdf` | Borghardt JM et al., Investigating pulmonary and systemic ph…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12780](https://doi.org/10.1111/bcp.12780) | [26348533](https://pubmed.ncbi.nlm.nih.gov/26348533) | Population PK model of olodaterol in humans with some numeric values (fractions, absorption half-life) in abstract, but full CL/V/Q parameter estimates likely in tables/supplement not provided. |
| `Borghardt_2016_2.pdf` | Borghardt JM et al., Model-based evaluation of pulmonary pha…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12999](https://doi.org/10.1111/bcp.12999) | [27145733](https://pubmed.ncbi.nlm.nih.gov/27145733) | Population PK model of olodaterol with quantitative absorption parameters (PBIO, absorption half-lives) reported in the abstract; disposition CL/V values may reside in the referenced prior model. |

<sub>queue written 2026-10-07T14:20:39.054524+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bouyssou_2010 | irrelevant | 1 | 0 | This is a pharmacodynamic preclinical characterization with no PK disposition parameters (CL, V, ka, half-life) reported for olodaterol. |
| popPK | Calzetta_2017 | irrelevant | 0 | 0 | This is an ex vivo pharmacodynamic drug-interaction study in equine bronchi; no PK disposition parameters for olodaterol are reported. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) meta-analysis of FEV1 for LABA/LAMA combinations, not a PK study; no olodaterol disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Ichinose_2017 | irrelevant | 0 | 0 | This is a study protocol for a COPD efficacy trial (lung function, exercise, physical activity) with no PK parameters for olodaterol. |
| popPK | Voskrebenzev_2026 | irrelevant | 0 | 0 | This is an MRI imaging study of tiotropium/olodaterol effects in COPD; no PK parameters (CL, V, ka, half-life) for olodaterol are reported. |
| popPK | Xing_2021 | irrelevant | 0 | 0 | Medicinal chemistry study of novel β2-agonist analogues with in vitro cAMP assays; no olodaterol PK parameters reported. |
| popPK | Yi_2020 | irrelevant | 0 | 0 | Medicinal chemistry study of β2-agonist analogs; olodaterol only used as a comparator, no PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 14:20 UTC</sub>
