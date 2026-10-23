<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;macitentan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Macitentan_Bartolucci2021_reference&quot;,&quot;label&quot;:&quot;Bartolucci_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# macitentan

- **generic name:** macitentan
- **ATC codes:** `C02KX04`, `C02KX54`
- **DrugBank:** [DB08932](https://go.drugbank.com/drugs/DB08932) · **PubChem:** [CID 16004692](https://pubchem.ncbi.nlm.nih.gov/compound/16004692)
- **molar mass:** 588.273 g/mol (C19H20Br2N6O4S) — DrugBank
- **groups:** approved, investigational

## About

Macitentan is an endothelin receptor antagonist used to treat pulmonary arterial hypertension. It is authorised in the European Union for pulmonary hypertension.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6724151](https://www.wikidata.org/wiki/Q6724151) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| macitentan | parent | 588.273 | C19H20Br2N6O4S | DrugBank | [16004692](https://pubchem.ncbi.nlm.nih.gov/compound/16004692) | Bartolucci_2021 |
| aprocitentan | metabolite | 546.194 | C16H14Br2N6O4S | PubChem | [25099191](https://pubchem.ncbi.nlm.nih.gov/compound/25099191) | Bartolucci_2021 |

## Start here

> **Bartolucci_2021_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> healthy adults and adult subjects with pulmonary arterial hypertension, n = &gt;=452. [Run it in the simulator](drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md?tab=Simulation) · [record](drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.39 | L/h | 1.39 L/h | healthy adults and adult subjects with pulmonary arterial hypertension | &gt;=452 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Bartolucci_2021_reference](drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md) |
| V | V/F | 34 | L | 34 L | healthy adults and adult subjects with pulmonary arterial hypertension | &gt;=452 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Bartolucci_2021_reference](drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md) |
| ka | kabs | 13.92 | 1/h | 13.92 h−1 | healthy adults and adult subjects with pulmonary arterial hypertension | &gt;=452 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Bartolucci_2021_reference](drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Bartolucci_2021_reference](drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Bartolucci R et al., A Population Pharmacokinetic Model of M…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01049-3](https://doi.org/10.1007/s40262-021-01049-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Liu_2020_SBP](drugs/drug_macitentan/pd_Liu_2020_SBP.md) | SBP ← macitentan · indirect response — drug inhibits the production of SBP | — | Liu HC et al., PK/PD modeling based on NO-ET homeostas…, Acta pharmacologica Sinica (2020) | [10.1038/s41401-019-0331-8](https://doi.org/10.1038/s41401-019-0331-8) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Lattanzio_2022](drugs/drug_macitentan/pgx_Lattanzio_2022_CYP2C9_safety.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C8** | `Q22` · CL | metabolism | [Lattanzio_2022](drugs/drug_macitentan/pgx_Lattanzio_2022_CYP2C8_Q22.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=macitentan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` metabolism/substrate, `CYP2C9` safety_allele/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: EDNRA (target), EDNRB (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:57 | 4:56 | 1/0/0 | 1/0/0 | 1/0/1 | 83,303/11,331 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 5  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bartolucci_2021.pdf` | Bartolucci R et al., A Population Pharmacokinetic Model of M…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-021-01049-3](https://doi.org/10.1007/s40262-021-01049-3) | [34159557](https://pubmed.ncbi.nlm.nih.gov/34159557) | The abstract provides specific quantitative PK parameters (Vd 34 L, CL 1.39 L/h) for macitentan in a population model, though full model parameter tables are likely in the main text or supplementary material not fully shown. |
| `Ahn_2014.pdf` | Ahn LY et al., Pharmacokinetic-pharmacodynamic relatio…, American journal of cardiov… (2014) | popPK | 8 | [10.1007/s40256-014-0081-4](https://doi.org/10.1007/s40256-014-0081-4) | [24906252](https://pubmed.ncbi.nlm.nih.gov/24906252) | The study reports PK parameters for macitentan in humans, but only provides ranges for half-life and qualitative descriptions for Cmax/AUC without specific numeric values for clearance or volume. |
| `Angus_2017.pdf` | Angus JA et al., Distortion of K, Pharmacology research & per… (2017) | pd | 5 | [10.1002/prp2.374](https://doi.org/10.1002/prp2.374) | [29226623](https://www.ncbi.nlm.nih.gov/pubmed/29226623) | metadata signals extractable PD data (EC50) |
| `Li_2019.pdf` | Li YH et al., Functional characterization of 27 CYP3A…, The Journal of pharmacy and… (2019) | pgx | 8 | [10.1111/jphp.13153](https://doi.org/10.1111/jphp.13153) | [31441067](https://www.ncbi.nlm.nih.gov/pubmed/31441067) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Atsmon_2013.pdf` | Atsmon J et al., Investigation of the effects of ketocon…, Clinical pharmacokinetics (2013) | pgx | 7 | [10.1007/s40262-013-0063-8](https://doi.org/10.1007/s40262-013-0063-8) | [23568224](https://www.ncbi.nlm.nih.gov/pubmed/23568224) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dai_2024.pdf` | Dai GX et al., Differential inhibition of sildenafil a…, Toxicology and applied phar… (2024) | pgx | 7 | [10.1016/j.taap.2024.116934](https://doi.org/10.1016/j.taap.2024.116934) | [38663673](https://www.ncbi.nlm.nih.gov/pubmed/38663673) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Huppertz_2018.pdf` | Huppertz A et al., Rivaroxaban and macitentan can be coadm…, British journal of clinical… (2018) | pgx | 7 | [10.1111/bcp.13757](https://doi.org/10.1111/bcp.13757) | [30192025](https://www.ncbi.nlm.nih.gov/pubmed/30192025) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `de_2016.pdf` | de Kanter R et al., Physiologically-Based Pharmacokinetic M…, Clinical pharmacokinetics (2016) | pgx | 7 | [10.1007/s40262-015-0322-y](https://doi.org/10.1007/s40262-015-0322-y) | [26385839](https://www.ncbi.nlm.nih.gov/pubmed/26385839) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T15:53:00.139385+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2014 | relevant | 8 | 4 | The study reports PK parameters for macitentan in humans, but only provides ranges for half-life and qualitative descriptions for Cmax/AUC without specific numeric values for clearance or volume. |
| PD | Ahn_2014 | not_relevant | 2 | 1 | The study reports qualitative dose-proportional PK and a positive correlation with ET-1, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Angus_2017 | irrelevant | 0 | 0 | no_text gate: only 15 chars of text extracted (&lt; 400) |
| PD | Angus_2017 | not_relevant | 0 | 0 | The provided text is a fragment ("Distortion of K") and contains no information regarding macitentan, pharmacodynamics, or exposure-response relationships. |
| PGx | Atsmon_2013 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Csonka_2026 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (macitentan with sildenafil, riociguat, rosuvastatin) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Dai_2024 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (saxagliptin with macitentan/sildenafil) and does not report any pharmacogenomic effects (gene variants) on macitentan's PK or PD parameters. |
| PGx | Gatfield_2014 | not_relevant | 0 | 0 | The paper investigates the molecular binding mode of macitentan to the ETA receptor using site-directed mutagenesis of the receptor, not human genetic variants affecting pharmacokinetics or pharmacodynamics. |
| PGx | Huppertz_2018 | not_relevant | 0 | 0 | The study assesses drug-drug interactions (rivaroxaban, St John's wort) in healthy volunteers and does not report any pharmacogenomic effects (gene variants) on macitentan PK/PD. |
| PGx | Kurimura_2025 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (bosentan/macitentan vs warfarin) and a drug-induced adverse effect (anemia), but does not report any pharmacogenomic effects (gene variants) on macitentan's PK or PD. |
| PGx | Lattanzio_2022 | not_relevant | 5 | 2 | The paper reports a case of hepatotoxicity associated with a poor metabolizer genotype but does not provide quantitative pharmacokinetic or pharmacodynamic parameter data (e.g., AUC, Cmax) to define a specific effect size. |
| popPK | Liu_2020 | irrelevant | 1 | 0 | Macitentan is used as a comparator antihypertensive agent in a PK/PD model for sunitinib-induced hypertension, and no quantitative PK parameters (CL, V, etc.) for macitentan are reported. |
| PGx | Mito_2022 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (PXR ligands) affecting warfarin, not pharmacogenomic effects on macitentan's PK/PD. |
| PGx | Treiber_2020 | not_relevant | 0 | 0 | The paper investigates species differences in CYP450 induction and pharmacokinetics in rats and dogs, but does not report any pharmacogenomic effects (gene variants/genotypes) on macitentan PK or PD parameters in humans. |
| PGx | Weiss_2013 | not_relevant | 0 | 0 | The paper describes in vitro drug-drug interaction potential (enzyme/transporter inhibition/induction) of macitentan, not the effect of a gene variant on macitentan's PK/PD. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP450 enzymes but does not report pharmacogenomic effects (gene variants/genotypes) on macitentan PK/PD. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (imperatorin/curcumin) and does not report pharmacogenomic effects (gene variants) on macitentan PK/PD. |
| PGx | Xu_2023 | not_relevant | 0 | 0 | The study investigates the effect of a drug-drug interaction (bergapten) on macitentan pharmacokinetics, not a pharmacogenomic effect (gene variant/genotype). |
| PGx | de_2016 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling for drug-drug interactions (CYP3A4 inhibitors/inducers) and does not report pharmacogenomic effects of gene variants on macitentan PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 15:53 UTC</sub>
