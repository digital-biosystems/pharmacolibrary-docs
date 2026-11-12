<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Maurotoxin&quot;}]"></div>

# Maurotoxin

- **generic name:** Maurotoxin
- **T3DB:** [T3D2521](http://www.t3db.ca/toxins/T3D2521) · **PubChem:** none

## About

Maurotoxin is a peptide toxin produced by the Chactoid scorpion (Scorpio maurus palmatus). It acts by blocking several types of voltage-gated potassium channel.

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Maurotoxin is a peptide toxin produced by the Chactoid scorpion (Scorpio maurus palmatus).
- **Mechanism of toxicity:** Maurotoxin acts by blocking several types of voltage-gated potassium channel.
- **Health effects:** Maurotoxin is neurotoxic.
- **Acute toxicity:** LD50: 9.37 mg/kg (Intravenous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2521">T3DB T3D2521</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 188240-41-7</small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Taylor_2026_AKI](drugs/toxin_maurotoxin/pd_Taylor_2026_AKI.md) | any stage AKI ← MTX · categorical (graded) response model | — | Taylor ZL et al., Use of a Cystatin C-Based GFR Equation…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01618-4](https://doi.org/10.1007/s40262-026-01618-4) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">rat</span> | [Hernández-Guerra_2013_E](drugs/toxin_maurotoxin/pd_Hern_ndez_Guerra_2013_E.md) | endothelial function ← maurotoxin · model not identified | — | Hernández-Guerra M et al., Chronic intermittent hypoxia aggravates…, Hepatology (Baltimore, Md.) (2013) | [10.1002/hep.26152](https://doi.org/10.1002/hep.26152) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Wang_2025_DAS28](drugs/toxin_maurotoxin/pd_Wang_2025_DAS28.md) | 28-joint disease activity score (DAS28) ← MTX-PG3 · indirect response — drug inhibits the production of 28-joint disease activity score (DAS28) | — | Wang X et al., Comprehensive Parent-Metabolite PBPK/PD…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13305](https://doi.org/10.1002/psp4.13305) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **MTMR9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Choi_2024](drugs/toxin_maurotoxin/pgx_Choi_2024_MTMR9_safety.md) | Choi JY et al., Novel genomic variants influencing meth…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1480657](https://doi.org/10.3389/fphar.2024.1480657) |
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **MTHFR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Kolan_2022](drugs/toxin_maurotoxin/pgx_Kolan_2022_MTHFR_safety.md) | Kolan SS et al., Identification of SNPs associated with…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1075603](https://doi.org/10.3389/fphar.2022.1075603) |
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **MTRR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Kolan_2022](drugs/toxin_maurotoxin/pgx_Kolan_2022_MTRR_safety.md) | Kolan SS et al., Identification of SNPs associated with…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1075603](https://doi.org/10.3389/fphar.2022.1075603) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CNTN2** | `Q22` · CL | unknown | [Choi_2024](drugs/toxin_maurotoxin/pgx_Choi_2024_CNTN2_Q22.md) | Choi JY et al., Novel genomic variants influencing meth…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1480657](https://doi.org/10.3389/fphar.2024.1480657) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ENG** | `Q22` · CL | unknown | [Choi_2024](drugs/toxin_maurotoxin/pgx_Choi_2024_ENG_Q22.md) | Choi JY et al., Novel genomic variants influencing meth…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1480657](https://doi.org/10.3389/fphar.2024.1480657) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **NSMCE1** | `Q22` · CL | unknown | [Choi_2024](drugs/toxin_maurotoxin/pgx_Choi_2024_NSMCE1_Q22.md) | Choi JY et al., Novel genomic variants influencing meth…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1480657](https://doi.org/10.3389/fphar.2024.1480657) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PKD1L2** | `Q22` · CL | unknown | [Choi_2024](drugs/toxin_maurotoxin/pgx_Choi_2024_PKD1L2_Q22.md) | Choi JY et al., Novel genomic variants influencing meth…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1480657](https://doi.org/10.3389/fphar.2024.1480657) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **POLI** | `Q22` · CL | unknown | [Choi_2024](drugs/toxin_maurotoxin/pgx_Choi_2024_POLI_Q22.md) | Choi JY et al., Novel genomic variants influencing meth…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1480657](https://doi.org/10.3389/fphar.2024.1480657) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCC1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Kolan_2022](drugs/toxin_maurotoxin/pgx_Kolan_2022_ABCC1_Q100.md) | Kolan SS et al., Identification of SNPs associated with…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1075603](https://doi.org/10.3389/fphar.2022.1075603) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **AIF-1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Kolan_2022](drugs/toxin_maurotoxin/pgx_Kolan_2022_AIF_1_Q100.md) | Kolan SS et al., Identification of SNPs associated with…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1075603](https://doi.org/10.3389/fphar.2022.1075603) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DHFR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kolan_2022](drugs/toxin_maurotoxin/pgx_Kolan_2022_DHFR_Q100.md) | Kolan SS et al., Identification of SNPs associated with…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1075603](https://doi.org/10.3389/fphar.2022.1075603) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLC19A1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Kolan_2022](drugs/toxin_maurotoxin/pgx_Kolan_2022_SLC19A1_Q100.md) | Kolan SS et al., Identification of SNPs associated with…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1075603](https://doi.org/10.3389/fphar.2022.1075603) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=maurotoxin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` transport | PGx paper |
| distribution | lung | `ABCC1` transport | PGx paper |

<sub>Actors without a tissue in the table: AIF-1 (unknown), CNTN2 (unknown), DHFR (target), ENG (unknown), MTHFR (safety_allele), MTMR9 (safety_allele), MTRR (safety_allele), NSMCE1 (unknown), PKD1L2 (unknown), POLI (unknown), SLC19A1 (transport).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 05:59 | 1:36:29 | 0/0/0 | 1/2/0 | 3/0/9 | 2,201,499/46,457 | einfracz / qwen3.8-27b | 97 | 18/71 | 97/0 | 0 |

## Coverage

- **PubMed hits:** 2062 matched, 313 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_13 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Golhen_2025.pdf` | Golhen K et al., Influence of Disease Type and Activity…, Journal of clinical pharmac… (2025) | pd | 5 | [10.1002/jcph.70045](https://doi.org/10.1002/jcph.70045) | [40410850](https://www.ncbi.nlm.nih.gov/pubmed/40410850) | metadata signals extractable PD data (exposure-response) |
| `Goss_2018.pdf` | Goss SL et al., Methotrexate Dose in Patients With Earl…, Clinical therapeutics (2018) | pd | 5 | [10.1016/j.clinthera.2018.01.002](https://doi.org/10.1016/j.clinthera.2018.01.002) | [29402521](https://www.ncbi.nlm.nih.gov/pubmed/29402521) | metadata signals extractable PD data (Exposure-response) |
| `Hebing_2023.pdf` | Hebing RCF et al., Methotrexate Polyglutamates Exposure -…, Clinical pharmacology and t… (2023) | pd | 5 | [10.1002/cpt.2974](https://doi.org/10.1002/cpt.2974) | [37313979](https://www.ncbi.nlm.nih.gov/pubmed/37313979) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Xue_1996.pdf` | Xue YC et al., [Antitumor activity of yungumycin], Yao xue xue bao = Acta phar… (1996) | pd | 4 |  | [9206265](https://www.ncbi.nlm.nih.gov/pubmed/9206265) | metadata signals extractable PD data (IC50) |
| `Giletti_2018.pdf` | Giletti A et al., Genetic markers in methotrexate treatme…, The pharmacogenomics journal (2018) | pgx | 8 | [10.1038/s41397-018-0047-z](https://doi.org/10.1038/s41397-018-0047-z) | [30237581](https://www.ncbi.nlm.nih.gov/pubmed/30237581) | metadata signals extractable PGX data (SLC19A1, PK/PD-context) |
| `Zhang_2022.pdf` | Zhang Y et al., A Systematic Review of Population Pharm…, European journal of drug me… (2022) | pgx | 8 | [10.1007/s13318-021-00737-6](https://doi.org/10.1007/s13318-021-00737-6) | [34985725](https://www.ncbi.nlm.nih.gov/pubmed/34985725) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Ramsey_2019.pdf` | Ramsey LB et al., Delayed methotrexate clearance in patie…, Pediatric blood & cancer (2019) | pgx | 7 | [10.1002/pbc.27618](https://doi.org/10.1002/pbc.27618) | [30677213](https://www.ncbi.nlm.nih.gov/pubmed/30677213) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Sane_2014.pdf` | Sane R et al., The effect of ABCG2 and ABCC4 on the ph…, Drug metabolism and disposi… (2014) | pgx | 7 | [10.1124/dmd.113.055228](https://doi.org/10.1124/dmd.113.055228) | [24464805](https://www.ncbi.nlm.nih.gov/pubmed/24464805) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Giletti_2017.pdf` | Giletti A et al., Methotrexate pharmacogenetics in Urugua…, European journal of pharmac… (2017) | pgx | 5 | [10.1016/j.ejps.2017.09.006](https://doi.org/10.1016/j.ejps.2017.09.006) | [28887233](https://www.ncbi.nlm.nih.gov/pubmed/28887233) | metadata signals extractable PGX data (SLC19A1) |
| `Iparraguirre_2016.pdf` | Iparraguirre L et al., MiR-pharmacogenetics of methotrexate in…, Pharmacogenetics and genomi… (2016) | pgx | 5 | [10.1097/FPC.0000000000000245](https://doi.org/10.1097/FPC.0000000000000245) | [27649261](https://www.ncbi.nlm.nih.gov/pubmed/27649261) | metadata signals extractable PGX data (ABCC4) |
| `Melikoglu_2022.pdf` | Melikoglu MA et al., Can we predict unresponsiveness to meth…, Inflammopharmacology (2022) | pgx | 5 | [10.1007/s10787-021-00921-9](https://doi.org/10.1007/s10787-021-00921-9) | [35043269](https://www.ncbi.nlm.nih.gov/pubmed/35043269) | metadata signals extractable PGX data (ABCB1) |
| `Pierik_2006.pdf` | Pierik M et al., Pharmacogenetics in inflammatory bowel…, World journal of gastroente… (2006) | pgx | 5 | [10.3748/wjg.v12.i23.3657](https://doi.org/10.3748/wjg.v12.i23.3657) | [16773681](https://www.ncbi.nlm.nih.gov/pubmed/16773681) | metadata signals extractable PGX data (TPMT) |
| `Salaün_2022.pdf` | Salaün H et al., Unexpected severe hepatic and skin toxi…, Journal of oncology pharmac… (2022) | pgx | 5 | [10.1177/10781552221076456](https://doi.org/10.1177/10781552221076456) | [35138194](https://www.ncbi.nlm.nih.gov/pubmed/35138194) | metadata signals extractable PGX data (SLCO1B1) |

<sub>queue written 2026-11-11 05:49 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdallah_2022 | not_relevant | 0 | 0 | The paper studies pharmacogenomics of methotrexate, not maurotoxin. |
| popPK | Abdelkareem_2026 | irrelevant | 0 | 0 | The paper focuses entirely on the pharmacokinetics and toxicology of methotrexate, with no mention of maurotoxin. |
| popPK | Abdelkhaliq_2020 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of silver nanoparticles (AgNPs), not maurotoxin. |
| PGx | Abud-Mendoza_2015 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| popPK | Adachi_1986 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for etoposide and cisplatin, not maurotoxin. |
| popPK | Ahern_1988 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Aherne_1981 | irrelevant | 0 | 0 | The paper reviews techniques for measuring methotrexate, not maurotoxin, and does not report kinetic parameters for the target substance. |
| popPK | Aletaha_2007 | irrelevant | 0 | 0 | The paper is an epidemiological study on rheumatoid arthritis treatment outcomes and contains no toxicokinetic data for maurotoxin. |
| popPK | Alifieris_2026 | irrelevant | 0 | 0 | The paper investigates steroidal antimetabolites for cancer treatment and does not contain any data regarding the substance maurotoxin. |
| popPK | Allegra_1988 | irrelevant | 0 | 0 | The paper discusses antimetabolites (MTX, 5-FU) and does not mention maurotoxin or report any kinetic parameters for it. |
| popPK | Alsdorf_2021 | irrelevant | 0 | 0 | The paper studies high-dose methotrexate (MTX) in cancer patients and does not contain any data for the subject substance maurotoxin. |
| popPK | Alsulimani_2016 | irrelevant | 0 | 0 | The paper reports kinetic parameters for methotrexate (MTX), not maurotoxin, which is the target substance. |
| popPK | Alum_2026 | irrelevant | 0 | 0 | The paper studies the neuroprotective effects of Jimson weed on methotrexate toxicity in rats and does not mention or measure toxicokinetic parameters for maurotoxin. |
| popPK | Arshad_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| PGx | Bae_2018 | not_relevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | Barreto_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Behrens_2001 | irrelevant | 0 | 0 | The paper investigates drug absorption models using unrelated compounds (barbiturates, testosterone) and does not study maurotoxin. |
| popPK | Beran_1994 | irrelevant | 0 | 0 | The paper describes the growth of leukemia cells in mice and does not mention or measure maurotoxin. |
| popPK | Bettencourt_1997 | irrelevant | 0 | 0 | The paper reports kinetic data for methotrexate (MTX) in rats, not for maurotoxin. |
| PGx | Bhojwani_2014 | not_relevant | 2 | 1 | The paper discusses methotrexate, not maurotoxin. |
| popPK | Blasco_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Bode_1980 | irrelevant | 0 | 0 | The paper studies methotrexate (MTX), not maurotoxin. |
| popPK | Bolognesi_2005 | irrelevant | 0 | 0 | The paper concerns biomonitoring of antineoplastic drugs (MTX, CP) and does not mention maurotoxin or provide kinetic parameters for it. |
| popPK | Bourré-Tessier_2010 | irrelevant | 0 | 0 | The paper discusses methotrexate (MTX) pharmacokinetics in humans and does not contain any data for maurotoxin. |
| popPK | Brandhonneur_2016 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of methotrexate, not maurotoxin. |
| popPK | Breithaupt_1982 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Bressolle_2000 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| PGx | Bunjaj_2023 | not_relevant | 0 | 0 | The paper is a systematic review of Platelet-Rich Plasma for psoriasis and does not mention maurotoxin or any pharmacogenomic effects. |
| popPK | Calabrò_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Campagne_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate and 7-hydroxymethotrexate, not maurotoxin. |
| popPK | Campbell_1985 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Carmichael_2003 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for hydroxychloroquine, not maurotoxin. |
| PGx | Castaldo_2011 | not_relevant | 0 | 0 | The paper focuses on methotrexate, not maurotoxin, so it does not meet the criteria. |
| popPK | Chandrupatla_2017 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics and uptake of the PET tracer [18F]fluoro-PEG-folate and the therapeutic efficacy of Methotrexate (MTX) in arthritic rats, containing no data on the subject substance maurotoxin. |
| popPK | Chandrupatla_2018 | irrelevant | 0 | 0 | The paper studies the PET tracer [18F]fluoro-PEG-folate and methotrexate in rats, and does not contain any data on maurotoxin. |
| popPK | Chandrupatla_2018_2 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and efficacy of alkaline phosphatase (AP) and methotrexate in arthritic rats, not maurotoxin. |
| PGx | Chang_2015 | not_relevant | 1 | 2 | The paper reports a clinical adverse event (GI perforation) in a patient with an MTHFR variant but does not report changes in pharmacokinetic (e.g., AUC, clearance) or quantitative pharmacodynamic parameters of maurotoxin (or methotrexate). |
| popPK | Chatterjee_1997 | irrelevant | 0 | 0 | The paper focuses on the percutaneous absorption of methotrexate and edatrexate; maurotoxin is not mentioned or studied. |
| popPK | Chellampillai_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for methotrexate, not maurotoxin, which is not mentioned. |
| PGx | Chen_2015 | not_relevant | 0 | 0 | The paper discusses methotrexate (MTX), not maurotoxin. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper reports on methotrexate and imatinib; maurotoxin is not mentioned or studied. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper focuses on methotrexate pharmacokinetics and does not contain any data for maurotoxin. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper reports efficacy parameters for methotrexate (MTX) in rheumatoid arthritis and does not contain any data for maurotoxin. |
| popPK | Chilton_1981 | irrelevant | 0 | 0 | The paper investigates the distribution of Gallium-67 in mice treated with methotrexate and contains no data on maurotoxin. |
| popPK | Chládek_2002 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Choi_2010 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 5-fluorouracil (5-FU) and methotrexate (MTX) in LDH nanoparticles, with no mention of maurotoxin. |
| popPK | Christensen_2024 | irrelevant | 0 | 0 | The paper studies methotrexate (MTX), not maurotoxin, despite "MTX" appearing in the numeric lines. |
| popPK | Costantini_2008 | irrelevant | 0 | 0 | The paper studies trastuzumab and does not mention maurotoxin or provide any toxicokinetic parameters for it. |
| popPK | Deguchi_1986 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of methotrexate and its antibody conjugate, not maurotoxin. |
| PGx | Destiani_2021 | not_relevant | 0 | 0 | The paper focuses on methotrexate, not maurotoxin, and does not report specific pharmacogenomic effects on PK/PD parameters for maurotoxin. |
| popPK | Devineni_1995 | irrelevant | 0 | 0 | The paper reports kinetic parameters for methotrexate, not maurotoxin. |
| popPK | Devineni_1996 | irrelevant | 0 | 0 | The paper reports kinetic parameters for methotrexate, not maurotoxin. |
| popPK | Diachinsky_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of methotrexate in pediatric patients and does not contain any data for maurotoxin. |
| PGx | Domin_1982 | not_relevant | 0 | 0 | The paper discusses methotrexate and DHFR, not maurotoxin. |
| popPK | Drost_2017 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Elmazar_1992 | irrelevant | 0 | 0 | The paper studies valproic acid and methotrexate, and does not mention maurotoxin or report any kinetic parameters for it. |
| popPK | Emery_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for abatacept, not maurotoxin. |
| popPK | Ensminger_1977 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for methotrexate and thymidine, not for maurotoxin. |
| popPK | Evans_1982 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Evans_1983 | irrelevant | 0 | 0 | The paper reports kinetic parameters for methotrexate, not maurotoxin. |
| popPK | Ferrazzini_1990 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of methotrexate and trimethoprim-sulfamethoxazole, with no mention of maurotoxin. |
| PGx | Fiehn_2009 | not_relevant | 0 | 0 | The paper concerns Methotrexate, not maurotoxin, and is a general review without specific pharmacogenomic data for the target drug. |
| popPK | Fikry_2017 | irrelevant | 0 | 0 | The paper studies methotrexate-induced cardiac fibrosis in rats and does not contain any data or kinetic parameters for maurotoxin. |
| popPK | Fishchuk_2024 | irrelevant | 0 | 0 | The paper discusses methotrexate (MTX), not maurotoxin, and is a pharmacogenetics review with no kinetic parameters for the target substance. |
| PGx | Fishchuk_2024 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| PGx | Frikha_2019 | not_relevant | 0 | 0 | The paper focuses on Methotrexate, not maurotoxin. |
| PGx | Frikha_2022 | not_relevant | 0 | 0 | The paper investigates methotrexate, not maurotoxin. |
| popPK | Fukaya_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate and glucarpidase, not for the subject substance maurotoxin. |
| popPK | Gao_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics and efficacy of mitoxantrone thermosensitive liposomes, not maurotoxin. |
| popPK | Gebhard_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 6-mercaptopurine and methotrexate, not maurotoxin. |
| popPK | Geoffroy_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| PGx | Gervasini_2019 | not_relevant | 0 | 0 | The paper discusses the pharmacogenetics of methotrexate, not maurotoxin. |
| PGx | Giletti_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacogenetics of Methotrexate, not maurotoxin. |
| PGx | Giletti_2018 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| popPK | Golhen_2025 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| popPK | Gooden_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Goss_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for methotrexate and adalimumab, not for maurotoxin. |
| PGx | Hamdani_2025 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of immunosuppressants (MTX, AZA, etc.) in SLE, but does not mention maurotoxin. |
| popPK | Han_2001 | irrelevant | 0 | 0 | The paper focuses on methotrexate analogs and does not report kinetic parameters for maurotoxin. |
| PGx | Hattinger_2017 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for antifolate drugs (methotrexate, etc.), not maurotoxin. |
| popPK | He_1991 | irrelevant | 0 | 0 | The paper reports kinetic parameters for methotrexate, not maurotoxin. |
| popPK | Hebing_2023 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PGx | Hegyi_2017 | not_relevant | 0 | 0 | The paper reports pharmacogenetic effects on methotrexate, not maurotoxin. |
| popPK | Hillson_1997 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of methotrexate, not maurotoxin. |
| popPK | Hinken_2011 | irrelevant | 0 | 0 | The paper investigates the tissue distribution of the reduced folate carrier (Rfc1) in rats and does not contain any toxicokinetic data for maurotoxin. |
| popPK | Hu_2019 | irrelevant | 0 | 0 | The paper is a review of methotrexate pharmacogenetics in pediatric leukemia patients and does not mention maurotoxin. |
| popPK | Hudecz_1993 | irrelevant | 0 | 0 | The paper studies methotrexate-branched polypeptide conjugates, not maurotoxin. |
| popPK | Hwang_2024 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of methotrexate (MTX), not maurotoxin. |
| popPK | Ilgan_1998 | irrelevant | 0 | 0 | The paper studies 111In-DTPA-methotrexate in rats and does not mention maurotoxin. |
| popPK | Inoue_2014 | irrelevant | 0 | 0 | The paper is a review of methotrexate pharmacokinetics and does not mention maurotoxin. |
| PGx | Iparraguirre_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenetics of methotrexate, not maurotoxin. |
| popPK | Isono_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Jadán-Piedra_2019 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of mercury (Hg) and methylmercury (MeHg), not maurotoxin. |
| popPK | Jebabli_2015 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Jensen_2002 | irrelevant | 0 | 0 | The paper is a review of the IK channel and its pharmacological blockers, discussing maurotoxin only as a mechanistic ligand without reporting any quantitative toxicokinetic parameters. |
| popPK | Jo_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a methotrexate-fluorophore conjugate in mice, not the substance maurotoxin. |
| popPK | Jost_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 6-mercaptopurine and methotrexate, not maurotoxin. |
| popPK | Kaminskas_2009 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of methotrexate (MTX) conjugated to dendrimers, whereas the subject substance is maurotoxin (a distinct toxin from Loxosceles spiders). |
| popPK | Karasik_2018 | irrelevant | 0 | 0 | The paper investigates the in vitro transport of methotrexate by Drosophila DMRP and contains no data on maurotoxin. |
| PGx | Karpa_2023 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| popPK | Kawakatsu_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Kellogg_2001 | irrelevant | 0 | 0 | The paper discusses a force field model for protein-ligand interactions and uses methotrexate as an example, containing no data for maurotoxin. |
| popPK | Kielbowski_2023 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of glucarpidase and methotrexate, but does not contain any data or parameters for maurotoxin. |
| popPK | Kim_1995 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of methotrexate in rats, not maurotoxin. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The paper describes a PBPK model for methotrexate, not maurotoxin. |
| popPK | Kim_2026_2 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Kimelberg_1978 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Kobelt_2002 | irrelevant | 0 | 0 | The paper is a cost-effectiveness analysis of leflunomide, methotrexate, and sulfasalazine in rheumatoid arthritis and does not report any kinetic parameters for maurotoxin. |
| PGx | Kodidela_2014 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics of methotrexate, not maurotoxin. |
| popPK | Kosinsky_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic parameters for olokizumab, a monoclonal antibody, not for maurotoxin. |
| PGx | Lee_2016 | not_relevant | 0 | 0 | The paper discusses ABCB1 polymorphism and DMARDs (e.g., methotrexate), not maurotoxin. |
| popPK | Li_2002 | irrelevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The paper focuses on Mitoxantrone (MTX) and fullerene derivatives, and contains no mention or data for maurotoxin. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of Methotrexate (MTX), not maurotoxin; maurotoxin is not mentioned or studied in this text. |
| popPK | Liang_2005 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Lima_2014 | irrelevant | 0 | 0 | The paper concerns methotrexate transporters and does not contain any data for maurotoxin. |
| popPK | Linciano_2020 | irrelevant | 0 | 0 | The paper focuses on the screening of a compound library for Trypanosoma brucei pteridine reductase 1 inhibitors and does not mention maurotoxin or provide any toxicokinetic parameters for it. |
| popPK | Lohitnavy_2017 | irrelevant | 0 | 0 | The paper reports PBPK parameters for methotrexate, not maurotoxin. |
| popPK | Lyu_2021 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of methotrexate (MTX) loaded in nanoparticles, not maurotoxin. |
| popPK | Ma_2014 | irrelevant | 0 | 0 | The paper focuses on clinical trial endpoint modeling for rheumatoid arthritis biologics and does not mention maurotoxin or any toxicokinetic parameters. |
| popPK | Magin_1986 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for liposomes containing Ara-C or MTX, not for maurotoxin. |
| popPK | Mao_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| PGx | Marangoni-Iglecias_2025 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| popPK | Matthews_2024 | irrelevant | 0 | 0 | The paper investigates cardiotoxicity mechanisms of anthracyclines (DOX, DNR, EPI, MTX) in iPSC-CMs and does not mention or report any data for maurotoxin. |
| popPK | Maximova_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of methotrexate in pediatric leukemia patients and does not mention maurotoxin. |
| popPK | McGuire_2006 | irrelevant | 0 | 0 | The paper studies the transport of methotrexate and AICAr, and does not mention maurotoxin. |
| popPK | Medellin-Garibay_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Mei_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| PGx | Melikoglu_2022 | not_relevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | Methaneethorn_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Miglioli_1985 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Miladinovic_2011 | irrelevant | 0 | 0 | The paper is a statistical methodology study regarding methotrexate and graft-versus-host-disease, with no mention of maurotoxin or toxicokinetic parameters. |
| popPK | Mishra_2021 | irrelevant | 0 | 0 | The paper studies methotrexate, not maurotoxin, and contains no kinetic parameters for the target substance. |
| popPK | Mojtahed_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of ustekinumab and methotrexate in humans, not maurotoxin. |
| popPK | Moshikur_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of methotrexate (MTX) ionic liquids, not maurotoxin. |
| popPK | Mosleh_2023 | irrelevant | 0 | 0 | The paper studies methotrexate (MTX), not maurotoxin, and maurotoxin is not mentioned in the provided evidence. |
| popPK | Murakami_1998 | irrelevant | 0 | 0 | The provided evidence contains only metadata and does not include the paper's content regarding maurotoxin or any kinetic parameters. |
| popPK | Mutlak_2024 | irrelevant | 0 | 0 | The paper investigates MTHFR gene polymorphisms in methotrexate treatment for rheumatoid arthritis and contains no data, kinetic parameters, or mention of maurotoxin. |
| PGx | Nademanee_1995 | not_relevant | 0 | 0 | The paper describes bone marrow transplant outcomes and HLA matching, and does not report pharmacogenomic effects on the PK or PD of maurotoxin. |
| popPK | Najjar_1998 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of methotrexate and piperacillin in rabbits, and does not contain any data for maurotoxin. |
| PGx | Nano_1992 | not_relevant | 0 | 0 | The paper studies DHFR expression and methotrexate resistance, not the pharmacokinetics or pharmacodynamics of maurotoxin. |
| popPK | Narawa_2015 | irrelevant | 0 | 0 | The paper investigates the transport of methotrexate (MTX), not maurotoxin. |
| popPK | Ng_2005 | irrelevant | 0 | 0 | The paper focuses on methotrexate and its analogues, with no mention of maurotoxin. |
| PGx | Nomair_2024 | not_relevant | 1 | 0 | The paper studies the pharmacogenomics of methotrexate, not maurotoxin. |
| popPK | Ogushi_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Olivo_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| PGx | Oosterom_2018 | not_relevant | 0 | 0 | The paper investigates methotrexate, not maurotoxin. |
| PGx | Organista-Nava_2019 | not_relevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | Orgel_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Otón_2022 | irrelevant | 0 | 0 | The paper is a systematic review of methotrexate in rheumatic diseases and does not contain data for maurotoxin. |
| popPK | Oude_2019 | irrelevant | 0 | 0 | The paper discusses methotrexate clearance and toxicity; maurotoxin is not mentioned or studied. |
| PGx | Oude_2019 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin, and does not report pharmacogenomic effects. |
| popPK | Paccaly_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drugs sarilumab and tocilizumab, not for maurotoxin. |
| popPK | Pai_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Papachristou_2018 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of radiolabeled methotrexate, not maurotoxin. |
| popPK | Park_1994 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Peng_2014 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of methotrexate (MTX) in rats, not maurotoxin, which is not mentioned or studied in this work. |
| popPK | Perkins_2023 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of methotrexate, not maurotoxin. |
| popPK | Pesenti_2021 | irrelevant | 0 | 0 | The paper reports a PBPK model for methotrexate, not maurotoxin, which is the required subject substance. |
| PGx | Peters_1993 | not_relevant | 0 | 0 | The paper discusses clinical pharmacokinetics and pharmacogenetics of anti-metabolites (Ara-C, MTX, 5FU, etc.) but does not mention maurotoxin or its pharmacokinetics/pharmacodynamics. |
| PGx | Pierik_2006 | not_relevant | 0 | 0 | The paper focuses on inflammatory bowel disease and does not mention maurotoxin. |
| popPK | Pinkel_1993 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of mercaptopurine, not maurotoxin. |
| popPK | Poulin_2015 | irrelevant | 0 | 0 | The paper investigates antineoplastic drugs (docetaxel, doxorubicin, etc.) and does not mention maurotoxin. |
| PGx | Qiu_2017 | not_relevant | 0 | 0 | The paper investigates methotrexate, not maurotoxin. |
| popPK | Ramsey_2019 | irrelevant | 0 | 0 | The paper studies methotrexate pharmacokinetics in the presence of dasatinib, and does not mention or contain data for maurotoxin. |
| PGx | Ramsey_2019 | not_relevant | 0 | 0 | The paper concerns methotrexate and dasatinib, not maurotoxin. |
| popPK | Ramsey_2019_2 | irrelevant | 0 | 0 | The paper studies the pharmacogenetics of methotrexate in juvenile idiopathic arthritis and does not contain any data or parameters for maurotoxin. |
| popPK | Rana_2020 | irrelevant | 0 | 0 | The paper is an in silico study on methotrexate analogs and dihydrofolate reductase, containing no data for maurotoxin. |
| popPK | Rasheed_2013 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of technetium-labeled methotrexate, not maurotoxin. |
| popPK | Ray_2017 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of methotrexate nanoparticles and does not mention or measure maurotoxin. |
| popPK | Ren_2015 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Ruderman_2013 | irrelevant | 0 | 0 | The paper discusses methotrexate and biologics for rheumatoid arthritis and does not mention maurotoxin. |
| PGx | Rumberger_1990 | not_relevant | 0 | 0 | The paper discusses folate analogs (edatrexate, methotrexate), not maurotoxin. |
| popPK | Sabatini_2012 | irrelevant | 0 | 0 | The paper studies occupational exposure to cyclophosphamide and methotrexate; maurotoxin is not mentioned or measured. |
| PGx | Salazar_2024 | not_relevant | 0 | 0 | The paper studies pharmacogenetics for MAP chemotherapy (methotrexate, doxorubicin, cisplatin) in osteosarcoma, not maurotoxin. |
| PGx | Salaün_2022 | not_relevant | 0 | 0 | The paper concerns methotrexate, not maurotoxin. |
| popPK | Sane_2014 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PGx | Sane_2014 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| popPK | Sani_2010 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of methotrexate, not maurotoxin, which is not mentioned in the provided text. |
| popPK | Schaff_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for methotrexate (MTX) and glucarpidase, not for the subject substance maurotoxin. |
| popPK | Schaff_2024 | irrelevant | 0 | 0 | The paper reports on methotrexate and glucarpidase pharmacokinetics, with no mention or data for the substance maurotoxin. |
| popPK | Schaller_2025 | irrelevant | 0 | 0 | The paper reports PBPK parameters for cyclosporin A, methotrexate, and rosuvastatin, but contains no data for maurotoxin. |
| popPK | Scheufler_1982 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of methotrexate, not maurotoxin. |
| popPK | Seideman_1993 | irrelevant | 0 | 0 | The paper investigates the renal effects of methotrexate, not maurotoxin. |
| PGx | Selvestrel_2021 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of methotrexate, not maurotoxin. |
| popPK | Shah_2016 | irrelevant | 0 | 0 | The paper studies dihydrofolate reductase nanostructures in mice and does not mention or test maurotoxin. |
| popPK | Shen_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of methotrexate, not maurotoxin. |
| popPK | Shi_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Shimizu_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Simpson_2019 | irrelevant | 0 | 0 | The paper is a network meta-analysis of rheumatoid arthritis treatments and contains no data regarding maurotoxin. |
| popPK | Skoloda_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not for the target substance maurotoxin. |
| popPK | Smeds_1991 | irrelevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | Sonneveld_1985 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of methotrexate, not maurotoxin. |
| popPK | Sousa_2026 | irrelevant | 0 | 0 | The paper studies PAHs and metal(loid)s in firefighters and does not mention or analyze maurotoxin. |
| popPK | Stehle_1997 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of methotrexate-albumin conjugates, not maurotoxin. |
| PGx | Szostak_2020 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| popPK | Takeuchi_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of methotrexate and ozoralizumab, with no mention of maurotoxin. |
| PGx | Tan_2023 | not_relevant | 1 | 1 | The paper studies methotrexate, not maurotoxin. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Taylor_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Taylor_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Taylor_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Théate_2024 | irrelevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | Tiwari_2015 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| PGx | Toksvang_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of methotrexate and 6-mercaptopurine in ALL treatment and does not mention maurotoxin. |
| PGx | Torres_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for methotrexate, not maurotoxin. |
| popPK | Tuan-Roslli_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Turci_2002 | irrelevant | 0 | 0 | The paper reports on biomonitoring of antineoplastic agents (cyclophosphamide, ifosfamide, methotrexate, platinum) and contains no mention or data for maurotoxin. |
| popPK | Uadia_1984 | irrelevant | 0 | 0 | The paper reports kinetic parameters for methotrexate and its conjugates, not maurotoxin. |
| popPK | Umerez_2017 | irrelevant | 0 | 0 | The paper discusses methotrexate (MTX) pharmacokinetics and MTHFR polymorphisms, which is completely unrelated to the substance maurotoxin. |
| PGx | Umerez_2017 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| PGx | Van_1994 | not_relevant | 0 | 0 | The paper discusses methotrexate in psoriasis and does not mention maurotoxin or any pharmacogenomic effects. |
| popPK | Vena_2018 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of methotrexate (MTX), not maurotoxin. |
| PGx | Vena_2018 | not_relevant | 0 | 0 | The paper is about methotrexate, not maurotoxin. |
| popPK | Villa_2022 | irrelevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | Vo_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of taurine, pyridoxic acid, and methotrexate in rats; maurotoxin is not mentioned or studied. |
| popPK | Wan_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of ciclosporin and methotrexate in humans, and maurotoxin is not mentioned. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Wang_2025_2 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Gaultheria leucocarpa components (MSTG-A, MSTG-B, Gaultherin) in rats, not maurotoxin. |
| PGx | Wei_2025 | not_relevant | 0 | 0 | The paper reports on the pharmacokinetics of methotrexate, not maurotoxin. |
| popPK | Widemann_2000 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the methotrexate metabolite DAMPA, not for maurotoxin. |
| popPK | Wunder_2003 | irrelevant | 0 | 0 | The paper is a collection of abstracts regarding rheumatoid arthritis, apoptosis, and bone remodeling, with no mention of maurotoxin or its toxicokinetics. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Yadlapati_2016 | irrelevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper is a review of methotrexate polyglutamates and does not contain any kinetic data for maurotoxin. |
| popPK | Yang_2024_2 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper studies the delivery of methotrexate using exosomes in a mouse model of psoriasis and does not report any kinetic parameters for maurotoxin. |
| popPK | Yin_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic parameters for methotrexate, not maurotoxin. |
| popPK | Yin_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Yousefi_2010 | irrelevant | 0 | 0 | The paper focuses on the synthesis and physicochemical characterization of methotrexate-PEG conjugates, containing no data for maurotoxin. |
| popPK | Yousefi_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX) and its PEGylated conjugate (MTX-PEG5000), not for maurotoxin. |
| popPK | Yu_2024 | irrelevant | 0 | 0 | The paper investigates acetaminophen (APAP), not maurotoxin. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Zhan_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| PGx | Zhan_2023 | not_relevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is a systematic review regarding the pharmacokinetics of Methotrexate, not Mauretoxin. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| PGx | Zhang_2023_2 | not_relevant | 0 | 0 | The paper reports somatic mutation profiles in primary central nervous system lymphoma, not pharmacogenomic effects on the PK/PD of maurotoxin. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), not maurotoxin. |
| popPK | Zhu_2009 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of methotrexate, not maurotoxin, and contains no data for the target substance. |
| popPK | Zhu_2023 | irrelevant | 0 | 0 | The paper reports on methotrexate-loaded nanoparticles for atherosclerosis treatment and contains no data or parameters for maurotoxin. |
| PGx | Zimdahl_2021 | not_relevant | 0 | 0 | The paper discusses thiopurine pharmacogenetics and is unrelated to maurotoxin. |
| PGx | de_2012 | not_relevant | 0 | 0 | The paper discusses methotrexate, not maurotoxin. |
| popPK | de_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper studies methotrexate, not maurotoxin. |
| popPK | den_2025 | irrelevant | 0 | 0 | The paper discusses the drug-drug interaction between methotrexate and NSAIDs, and maurotoxin is not mentioned or studied. |
| popPK | van_2011 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of paclitaxel and methotrexate, not maurotoxin. |
| popPK | Şahin_2026 | irrelevant | 0 | 0 | The paper focuses on methanol intoxication and the nephroprotective effects of ethanol and fomepizole in rats, with no mention of maurotoxin. |
| popPK | Škorić_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate, not maurotoxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmaurotoxin%5D&body=Drug%3A%20maurotoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_maurotoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
