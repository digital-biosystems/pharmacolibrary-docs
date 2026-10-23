<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;palonosetron&quot;}]"></div>

# palonosetron

- **generic name:** palonosetron
- **ATC codes:** `A04AA05`
- **DrugBank:** [DB00377](https://go.drugbank.com/drugs/DB00377) · **PubChem:** [CID 6337614](https://pubchem.ncbi.nlm.nih.gov/compound/6337614)
- **molar mass:** 296.414 g/mol (C19H24N2O) — DrugBank
- **groups:** approved, investigational

## About

Palonosetron is a serotonin antagonist antiemetic used to prevent nausea and vomiting, including that caused by cancer treatment. It is an approved medicine, with products authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419841](https://www.wikidata.org/wiki/Q419841) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosrolapitant | metabolite | 654.497 | C27H29F6N2O8P | PubChem | [163871173](https://pubchem.ncbi.nlm.nih.gov/compound/163871173) | Li_2026 |
| rolapitant | metabolite | 500.483 | C25H26F6N2O2 | PubChem | [10311306](https://pubchem.ncbi.nlm.nih.gov/compound/10311306) | Li_2026 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Li_2026_healthy_control](drugs/drug_palonosetron/Palonosetron_Li2026_healthy_control.md) | — | parent + metabolite (no model) | 5 | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ moderate_hepatic_impairment](drugs/drug_palonosetron/Palonosetron_Li2026_moderate_hepatic_impairment.md) | — | parent + metabolite (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub> | [↳ palonosetron](drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron.md) | held back | 1-compartment, IV | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lee_2019_reference](drugs/drug_palonosetron/Palonosetron_Lee2019_reference.md) | — | 1-compartment (no model) | 0 | Lee S et al., Population pharmacokinetics of palonose…, Journal of anesthesia (2019) | [10.1007/s00540-019-02641-5](https://doi.org/10.1007/s00540-019-02641-5) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB1** | `Q40` · Fab | transport | [Ribeiro_2024](drugs/drug_palonosetron/pgx_Ribeiro_2024_ABCB1_Q40.md) | Ribeiro AHS et al., CYP2D6 isoenzyme and ABCB1 gene polymor…, Brazilian journal of anesth… (2024) | [10.1016/j.bjane.2023.02.002](https://doi.org/10.1016/j.bjane.2023.02.002) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q22` · CL | metabolism | [Ribeiro_2024](drugs/drug_palonosetron/pgx_Ribeiro_2024_CYP2D6_Q22.md) | Ribeiro AHS et al., CYP2D6 isoenzyme and ABCB1 gene polymor…, Brazilian journal of anesth… (2024) | [10.1016/j.bjane.2023.02.002](https://doi.org/10.1016/j.bjane.2023.02.002) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **HTR3A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeo_2025](drugs/drug_palonosetron/pgx_Yeo_2025_HTR3A_Q100.md) | Yeo W et al., Personalized Prophylactic Antiemetic Re…, JCO precision oncology (2025) | [10.1200/PO-24-00858](https://doi.org/10.1200/PO-24-00858) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **HTR3B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeo_2025](drugs/drug_palonosetron/pgx_Yeo_2025_HTR3B_Q100.md) | Yeo W et al., Personalized Prophylactic Antiemetic Re…, JCO precision oncology (2025) | [10.1200/PO-24-00858](https://doi.org/10.1200/PO-24-00858) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **TACR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeo_2025](drugs/drug_palonosetron/pgx_Yeo_2025_TACR1_Q100.md) | Yeo W et al., Personalized Prophylactic Antiemetic Re…, JCO precision oncology (2025) | [10.1200/PO-24-00858](https://doi.org/10.1200/PO-24-00858) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=palonosetron).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` transport | PGx paper |
| distribution | blood-brain barrier | `ABCB1` transport | PGx paper |
| distribution | placenta | `ABCB1` transport | PGx paper |
| distribution | testis | `ABCB1` transport | PGx paper |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` transport | PGx paper |
| excretion | liver | `ABCB1` transport | PGx paper |

<sub>Actors without a tissue in the table: HTR3A (target), HTR3B (target), TACR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:31 | 9:10 | 3/1/0 | 0/0/0 | 0/0/5 | 130,728/28,642 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/9 | 9/1 | 0 |

## Coverage

- **PubMed hits:** 46 matched, 41 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2019.pdf` | Lee S et al., Population pharmacokinetics of palonose…, Journal of anesthesia (2019) | popPK | 10 | [10.1007/s00540-019-02641-5](https://doi.org/10.1007/s00540-019-02641-5) | [30976908](https://pubmed.ncbi.nlm.nih.gov/30976908) | The study reports a population PK model for palonosetron in humans with specific numeric values for clearance and central volume of distribution provided in the abstract. |
| `Li_2012.pdf` | Li P et al., Liquid chromatography-electrospray quad…, Journal of chromatography.… (2012) | popPK | 8 | [10.1016/j.jchromb.2012.03.001](https://doi.org/10.1016/j.jchromb.2012.03.001) | [22465199](https://pubmed.ncbi.nlm.nih.gov/22465199) | The study describes a PK analysis of palonosetron in humans using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided text, only qualitative descriptions and urine excretion rates. |
| `Wang_2016.pdf` | Wang J et al., Exposure-Response of Palonosetron for P…, Journal of pediatric gastro… (2016) | popPK | 8 | [10.1097/MPG.0000000000001173](https://doi.org/10.1097/MPG.0000000000001173) | [26913757](https://pubmed.ncbi.nlm.nih.gov/26913757) | The study reports pharmacokinetic analyses and exposure-response data for palonosetron in pediatric patients, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Calcagnile_2013.pdf` | Calcagnile S et al., Effect of netupitant, a highly selectiv…, Supportive care in cancer :… (2013) | pgx | 7 | [10.1007/s00520-013-1857-9](https://doi.org/10.1007/s00520-013-1857-9) | [23748441](https://www.ncbi.nlm.nih.gov/pubmed/23748441) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Warr_2012.pdf` | Warr D, Management of highly emetogenic chemoth…, Current opinion in oncology (2012) | pgx | 7 | [10.1097/CCO.0b013e328352f6fb](https://doi.org/10.1097/CCO.0b013e328352f6fb) | [22476193](https://www.ncbi.nlm.nih.gov/pubmed/22476193) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Janicki_2005.pdf` | Janicki PK, Cytochrome P450 2D6 metabolism and 5-hy…, Medical science monitor : i… (2005) | pgx | 5 |  | [16192915](https://www.ncbi.nlm.nih.gov/pubmed/16192915) | metadata signals extractable PGX data (CYP2D6) |
| `Song_2017.pdf` | Song JW et al., Comparison of Ramosetron and Palonosetr…, Journal of neurosurgical an… (2017) | pgx | 5 | [10.1097/ANA.0000000000000361](https://doi.org/10.1097/ANA.0000000000000361) | [27564555](https://www.ncbi.nlm.nih.gov/pubmed/27564555) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-04 14:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aapro_2010 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving aprepitant and palonosetron, not pharmacogenomic effects on palonosetron's PK/PD. |
| PGx | Calcagnile_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP3A4 inhibitors/inducers) rather than pharmacogenomic effects of gene variants on palonosetron PK/PD. |
| PGx | Davis_2016 | not_relevant | 0 | 0 | The text is a general review of antiemetic therapies and does not report any pharmacogenomic effects on palonosetron PK/PD. |
| popPK | Gil_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing the effect of palonosetron on remifentanil requirements for cough suppression, not a pharmacokinetic study of palonosetron. |
| PGx | Hamada_2024 | not_relevant | 0 | 0 | The paper is a case report on a drug-drug interaction involving oxycodone and aprepitant, with no mention of pharmacogenomics or specific PK/PD parameters for palonosetron. |
| PGx | Ho_2006 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacogenetic factors (CYP450, ABCB1, 5-HT3) generally but does not report specific quantitative effects of variants on palonosetron PK/PD parameters. |
| PGx | Janicki_2005 | not_relevant | 5 | 0 | The text is a qualitative review discussing the mechanism of CYP2D6 polymorphism affecting palonosetron efficacy, but it does not report specific quantitative PK/PD parameter changes or fitted effect sizes. |
| PGx | Lerman_2019 | not_relevant | 1 | 0 | The paper is a general review of pediatric ambulatory anesthesia that mentions palonosetron only as a future therapeutic option for PONV, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Li_2012 | relevant | 8 | 2 | The study describes a PK analysis of palonosetron in humans using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided text, only qualitative descriptions and urine excretion rates. |
| PGx | Moore_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for ondansetron, tropisetron, dolasetron, and ramosetron, but does not report PK or PD parameters for palonosetron. |
| PGx | Moore_2026 | not_relevant | 0 | 0 | The paper is a clinical guideline for CYP2D6 and 5-HT3 antagonists, but it does not report specific pharmacokinetic or pharmacodynamic effect sizes for palonosetron. |
| PGx | Natale_2016 | not_relevant | 0 | 0 | The paper reports drug-drug interactions involving netupitant and palonosetron, not pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Navari_2015 | not_relevant | 0 | 0 | The paper describes the clinical profile and efficacy of the netupitant/palonosetron combination but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Pinilla_2025 | not_relevant | 0 | 0 | The paper is a case report on ifosfamide-induced encephalopathy and does not report any pharmacogenomic effects on palonosetron PK or PD parameters. |
| PGx | Rapoport_2017 | not_relevant | 0 | 0 | The paper is a general review of NK-1 receptor antagonists and does not report any pharmacogenomic effects on the PK or PD of palonosetron. |
| PGx | Rubenstein_2006 | not_relevant | 0 | 0 | The paper is a general review of CINV treatments and mentions pharmacogenomics only as a future direction without reporting specific gene-drug interactions or PK/PD data for palonosetron. |
| PGx | Shimamoto_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of dexamethasone and its interaction with fosaprepitant, not the pharmacogenomics of palonosetron. |
| PGx | Song_2017 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic effect (PONV severity) for ramosetron, but for palonosetron, it only shows a lack of difference in nausea incidence and does not report a specific genotype-dependent change in palonosetron's PK or PD parameters. |
| PGx | Theodosopoulou_2023 | not_relevant | 2 | 0 | The paper states that ABCB1 polymorphisms did not affect palonosetron's efficacy, reporting a null result rather than a pharmacogenomic effect. |
| popPK | Thompson_2024 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cisplatin (total platinum), not palonosetron, which is only a co-administered antiemetic comparator. |
| popPK | Thompson_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cisplatin (platinum), with palonosetron serving only as a comparator antiemetic agent. |
| PGx | Tsuji_2017 | not_relevant | 2 | 0 | The study reports no significant association between genetic polymorphisms and palonosetron efficacy, and does not report specific PK/PD parameter changes. |
| popPK | Wang_2016 | relevant | 8 | 2 | The study reports pharmacokinetic analyses and exposure-response data for palonosetron in pediatric patients, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| PD | Wang_2016 | not_relevant | 3 | 1 | The paper discusses exposure-response concepts and compares AUC and response rates between populations but does not report a fitted PD model or numeric PD parameters (e.g., Emax, EC50) in the provided text. |
| PGx | Warr_2012 | not_relevant | 0 | 0 | The paper is a clinical review of antiemetic management and does not report pharmacogenomic effects on palonosetron PK/PD. |
| PGx | Xiong_2019 | not_relevant | 0 | 0 | The study investigates the pharmacokinetic interaction between aprepitant and ifosfamide, not the effect of a gene variant on palonosetron. |
| PGx | Yokoi_2018 | not_relevant | 0 | 0 | The study investigates genetic risk factors for chemotherapy-induced nausea and vomiting (CINV) and antiemetic response, but does not report pharmacokinetic or pharmacodynamic parameters of palonosetron. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpalonosetron%5D&body=Drug%3A%20palonosetron%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_palonosetron/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-04 14:23 UTC</sub>
