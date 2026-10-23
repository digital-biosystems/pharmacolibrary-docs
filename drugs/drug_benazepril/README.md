<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;benazepril&quot;}]"></div>

# benazepril

- **generic name:** benazepril
- **ATC codes:** `C09AA07`, `C09BA07`, `C09BB13`
- **DrugBank:** [DB00542](https://go.drugbank.com/drugs/DB00542) · **PubChem:** [CID 5362124](https://pubchem.ncbi.nlm.nih.gov/compound/5362124)
- **molar mass:** 424.4895 g/mol (C24H28N2O5) — DrugBank
- **groups:** approved, investigational

## About

Benazepril is an ACE inhibitor used to treat high blood pressure and congestive heart failure. It is an approved medicine, available alone and in combination products with diuretics or calcium channel blockers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q592802](https://www.wikidata.org/wiki/Q592802) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| benazepril | parent | 424.49 | C24H28N2O5 | DrugBank | [5362124](https://pubchem.ncbi.nlm.nih.gov/compound/5362124) | King_2003 |
| benazeprilat | metabolite | 396.45 | — | the paper | — | King_2003 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="cat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [King_2003_repeated_administration_n_6](drugs/drug_benazepril/Benazepril_King2003_repeated_administration_n_6.md) | — | 1-compartment (no model) | 8 | King JN et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary pharm… (2003) | [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x) |
| <span class="pk-rf" hidden data-species="cat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ single_administration_n_5](drugs/drug_benazepril/Benazepril_King2003_single_administration_n_5.md) | — | 1-compartment (no model) | 8 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span> | [King_2003_ACE_activity](drugs/drug_benazepril/pd_King_2003_ACE_activity.md) | plasma angiotensin-converting enzyme (ACE) activity ← benazeprilat · direct sigmoid Emax (Hill) effect | — | King JN et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary pharm… (2003) | [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **MTHFR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Jiang_2004](drugs/drug_benazepril/pgx_Jiang_2004_MTHFR_safety.md) | Jiang S et al., The C677T polymorphism of the methylene…, Thrombosis research (2004) | [10.1016/j.thromres.2004.04.005](https://doi.org/10.1016/j.thromres.2004.04.005) |
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **MTHFR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Zhang_2004](drugs/drug_benazepril/pgx_Zhang_2004_MTHFR_safety.md) | Zhang Y et al., D919G polymorphism of methionine syntha…, Journal of human genetics (2004) | [10.1007/s10038-004-0149-0](https://doi.org/10.1007/s10038-004-0149-0) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ACE2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Chen_2016](drugs/drug_benazepril/pgx_Chen_2016_ACE2_Q100.md) | Chen YY et al., Impact of ACE2 gene polymorphism on ant…, Journal of human hypertensi… (2016) | [10.1038/jhh.2016.24](https://doi.org/10.1038/jhh.2016.24) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ACE** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Ha_2000](drugs/drug_benazepril/pgx_Ha_2000_ACE_Q100.md) | Ha SK et al., ACE DD genotype is more susceptible tha…, Nephrology, dialysis, trans… (2000) | [10.1093/ndt/15.10.1617](https://doi.org/10.1093/ndt/15.10.1617) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ADRB2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Huang_2004](drugs/drug_benazepril/pgx_Huang_2004_ADRB2_Q100.md) | Huang G et al., Beta2 adrenergic receptor gene Arg16Gly…, Clinical and experimental h… (2004) | [10.1081/ceh-200031839](https://doi.org/10.1081/ceh-200031839) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=benazepril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor), ACE (target), ACE2 (target), ADRB2 (target), MTHFR (safety_allele), MTHFR (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:14 | 12:37 | 0/2/0 | 1/0/0 | 2/0/3 | 159,303/42,983 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 8/0 | 1/7 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 8  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reinisch_2023.pdf` | Reinisch V et al., Development of a Digital Interface for…, Studies in health technolog… (2023) | popPK | 8 | [10.3233/SHTI230027](https://doi.org/10.3233/SHTI230027) | [37172168](https://pubmed.ncbi.nlm.nih.gov/37172168) | The paper describes a PBPK and population PK model for benazepril/benazeprilat, but the specific numeric parameter values are not present in the provided evidence. |
| `King_1997.pdf` | King JN et al., Pharmacokinetics of the angiotensin-con…, Xenobiotica; the fate of fo… (1997) | pd | 5 | [10.1080/004982597240181](https://doi.org/10.1080/004982597240181) | [9293618](https://www.ncbi.nlm.nih.gov/pubmed/9293618) | metadata signals extractable PD data (Emax) |
| `King_1999.pdf` | King JN et al., Plasma angiotensin converting enzyme ac…, Journal of veterinary pharm… (1999) | pd | 5 | [10.1046/j.1365-2885.1999.00230.x](https://doi.org/10.1046/j.1365-2885.1999.00230.x) | [10651464](https://www.ncbi.nlm.nih.gov/pubmed/10651464) | metadata signals extractable PD data (Emax) |
| `Manson_2025.pdf` | Manson E et al., Dose-exposure-response of CARDALIS® (be…, Journal of veterinary inter… (2025) | pd | 5 | [10.1111/jvim.17255](https://doi.org/10.1111/jvim.17255) | [39601373](https://www.ncbi.nlm.nih.gov/pubmed/39601373) | metadata signals extractable PD data (exposure-response) |
| `Mochel_2015.pdf` | Mochel JP et al., Pharmacokinetic/Pharmacodynamic Modelin…, Pharmaceutical research (2015) | pd | 5 | [10.1007/s11095-014-1587-9](https://doi.org/10.1007/s11095-014-1587-9) | [25446774](https://www.ncbi.nlm.nih.gov/pubmed/25446774) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Serrano-Rodríguez_2017.pdf` | Serrano-Rodríguez JM et al., Pharmacokinetic/pharmacodynamic modelin…, Research in veterinary scie… (2017) | pd | 5 | [10.1016/j.rvsc.2017.03.016](https://doi.org/10.1016/j.rvsc.2017.03.016) | [28371693](https://www.ncbi.nlm.nih.gov/pubmed/28371693) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Toutain_2000.pdf` | Toutain PL et al., Benazeprilat disposition and effect in…, The Journal of pharmacology… (2000) | pd | 5 |  | [10688627](https://www.ncbi.nlm.nih.gov/pubmed/10688627) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-07 05:02 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ding_2000 | not_relevant | 0 | 0 | The paper discusses ACE inhibitors in general (cilazapril, fosinopril, perindopril) and does not report pharmacokinetic or pharmacodynamic data for benazepril. |
| popPK | King_1997 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | King_1997 | not_relevant | 0 | 0 | The paper reports only pharmacokinetics of benazepril and benazeprilat in dogs, with no concentration-effect or dose-response relationship or PD parameters described. |
| popPK | King_1999 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| popPK | Manson_2025 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| popPK | Mochel_2015 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| popPK | Reinisch_2023 | relevant | 8 | 0 | The paper describes a PBPK and population PK model for benazepril/benazeprilat, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Serrano-Rodríguez_2017 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| popPK | Toutain_2000 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PGx | Yu_2005 | not_relevant | 0 | 0 | The study reports no association between the gene polymorphisms and the blood pressure response to Benazepril treatment. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenazepril%5D&body=Drug%3A%20benazepril%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_benazepril/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 05:02 UTC</sub>
