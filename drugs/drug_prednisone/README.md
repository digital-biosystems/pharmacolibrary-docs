<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;prednisone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prednisone_Bouazza2025_reference&quot;,&quot;label&quot;:&quot;Bouazza_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisone/Prednisone_Bouazza2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisone_Magee2002_reference&quot;,&quot;label&quot;:&quot;Magee_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisone/Prednisone_Magee2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisone_Sassen2020_reference&quot;,&quot;label&quot;:&quot;Sassen_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisone/Prednisone_Sassen2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# prednisone

- **generic name:** prednisone
- **ATC codes:** `A07EA03`, `H02AB07`
- **DrugBank:** [DB00635](https://go.drugbank.com/drugs/DB00635) · **PubChem:** [CID 5865](https://pubchem.ncbi.nlm.nih.gov/compound/5865)
- **molar mass:** 358.4281 g/mol (C21H26O5) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Prednisone is a glucocorticoid used to treat many inflammatory, autoimmune, and allergic conditions, such as arthritis, ulcerative colitis, asthma-related inflammation, and certain cancers and blood disorders. It is widely used in human medicine and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424972](https://www.wikidata.org/wiki/Q424972) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| prednisone | parent | 358.428 | C21H26O5 | DrugBank | [5865](https://pubchem.ncbi.nlm.nih.gov/compound/5865) | Bouazza_2025, Magee_2002, de_2023 |
| prednisolone | metabolite | 360.45 | C21H28O5 | PubChem | [5755](https://pubchem.ncbi.nlm.nih.gov/compound/5755) | Bouazza_2025, Magee_2002, de_2023 |

## Start here

> **Magee_2002_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy adults, n = &gt;=32. [Run it in the simulator](drugs/drug_prednisone/Prednisone_Magee2002_reference.md?tab=Simulation) · [record](drugs/drug_prednisone/Prednisone_Magee2002_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 86 ‡ | L/h | 86.0 L/h/70 kg | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Sassen_2020_reference](drugs/drug_prednisone/Prednisone_Sassen2020_reference.md) |
| V | V/F | 695 ‡ | L | 695.0 L/70 kg | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Sassen_2020_reference](drugs/drug_prednisone/Prednisone_Sassen2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T6_deviations</sub> | [Bouazza_2025_reference](drugs/drug_prednisone/Prednisone_Bouazza2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Bouazza N et al., Population pharmacokinetic modelling of…, British journal of clinical… (2025) | [10.1002/bcp.70103](https://doi.org/10.1002/bcp.70103) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T6_deviations</sub> | [Magee_2002_reference](drugs/drug_prednisone/Prednisone_Magee2002_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Magee MH et al., Pharmacokinetic/pharmacodynamic model f…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01567.x](https://doi.org/10.1046/j.1365-2125.2002.01567.x) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Sassen_2020_reference](drugs/drug_prednisone/Prednisone_Sassen2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Sassen SDT et al., Population Pharmacokinetics and Pharmac…, Clinical infectious disease… (2020) | [10.1093/cid/ciz1163](https://doi.org/10.1093/cid/ciz1163) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [de_2023_reference](drugs/drug_prednisone/Prednisone_de2023_reference.md) | — | 1-compartment (no model) | 2 | de Truchis C et al., Prednisolone pharmacokinetics after ora…, British journal of clinical… (2023) | [10.1111/bcp.15610](https://doi.org/10.1111/bcp.15610) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Magee_2002_Ex_vivo_WBLP](drugs/drug_prednisone/pd_Magee_2002_Ex_vivo_WBLP.md) | Ex vivo whole blood lymphocyte proliferation ← prednisolone · delayed effect through transit (transduction) compartments | — | Magee MH et al., Pharmacokinetic/pharmacodynamic model f…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01567.x](https://doi.org/10.1046/j.1365-2125.2002.01567.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Magee_2002_In_vitro_WBLP](drugs/drug_prednisone/pd_Magee_2002_In_vitro_WBLP.md) | In vitro whole blood lymphocyte proliferation ← prednisolone · direct Emax (saturable) effect | — | Magee MH et al., Pharmacokinetic/pharmacodynamic model f…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01567.x](https://doi.org/10.1046/j.1365-2125.2002.01567.x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Magee_2002_T_lymphocytes](drugs/drug_prednisone/pd_Magee_2002_T_lymphocytes.md) | T-lymphocyte cell counts ← prednisolone · indirect response — drug inhibits the production of T-lymphocyte cell counts | model (no simulator) | Magee MH et al., Pharmacokinetic/pharmacodynamic model f…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01567.x](https://doi.org/10.1046/j.1365-2125.2002.01567.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **HSD11B1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Blaschke_2025](drugs/drug_prednisone/pgx_Blaschke_2025_HSD11B1_Q100.md) | Blaschke M et al., The local inactivation of glucocorticoi…, PNAS nexus (2025) | [10.1093/pnasnexus/pgaf315](https://doi.org/10.1093/pnasnexus/pgaf315) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=prednisone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inducer/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP2A6` inducer, `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inducer, `CYP2C9` inducer, `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | lung | `CYP1B1` inducer | DrugBank actor |
| metabolism | skin | `CYP1B1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| excretion | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HSD11B1 (metabolism), HSD11B1 (substrate), NR3C1 (target), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:09 | 20:37 | 3/1/0 | 1/0/0 | 0/0/1 | 396,148/59,074 | ollama / qwen3.8:27b-mtp-q8_0 | 23 | 2/22 | 22/1 | 0 |

## Coverage

- **PubMed hits:** 376 matched, 75 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_13 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_2023.pdf` | de Truchis C et al., Prednisolone pharmacokinetics after ora…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15610](https://doi.org/10.1111/bcp.15610) | [36510685](https://pubmed.ncbi.nlm.nih.gov/36510685) | The study reports quantitative population pharmacokinetic parameters (clearance and volume of distribution) for prednisolone, the active metabolite of prednisone, in human subjects. |
| `Blanchet_2018.pdf` | Blanchet B et al., A PK/PD study of Delta-4 abiraterone me…, Pharmacological research (2018) | pd | 5 | [10.1016/j.phrs.2018.08.016](https://doi.org/10.1016/j.phrs.2018.08.016) | [30142421](https://www.ncbi.nlm.nih.gov/pubmed/30142421) | metadata signals extractable PD data (PK/PD) |
| `Chakraborty_1999.pdf` | Chakraborty A et al., Pharmacokinetic and adrenal interaction…, Journal of clinical pharmac… (1999) | pd | 5 | [10.1177/00912709922008137](https://doi.org/10.1177/00912709922008137) | [10354967](https://www.ncbi.nlm.nih.gov/pubmed/10354967) | metadata signals extractable PD data (indirectresponse) |
| `Honoré_2014.pdf` | Honoré PM et al., What do we know about steroids metaboli…, Blood purification (2014) | pd | 5 | [10.1159/000368390](https://doi.org/10.1159/000368390) | [25471548](https://www.ncbi.nlm.nih.gov/pubmed/25471548) | metadata signals extractable PD data (PK/PD) |
| `Kishi_2004.pdf` | Kishi S et al., Effects of prednisone and genetic polym…, Blood (2004) | pgx | 8 | [10.1182/blood-2003-06-2105](https://doi.org/10.1182/blood-2003-06-2105) | [12969965](https://www.ncbi.nlm.nih.gov/pubmed/12969965) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Romano-Aguilar_2020.pdf` | Romano-Aguilar M et al., Population pharmacokinetics of mycophen…, Lupus (2020) | pgx | 8 | [10.1177/0961203320931567](https://doi.org/10.1177/0961203320931567) | [32539658](https://www.ncbi.nlm.nih.gov/pubmed/32539658) | metadata signals extractable PGX data (UGT1A8, PK/PD-context) |
| `Santoro_2011.pdf` | Santoro A et al., Pharmacogenetics of calcineurin inhibit…, Pharmacogenomics (2011) | pgx | 8 | [10.2217/pgs.11.70](https://doi.org/10.2217/pgs.11.70) | [21806386](https://www.ncbi.nlm.nih.gov/pubmed/21806386) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Skauby_2017.pdf` | Skauby RH et al., Prednisolone and Prednisone Pharmacokin…, Therapeutic drug monitoring (2017) | pgx | 8 | [10.1097/FTD.0000000000000439](https://doi.org/10.1097/FTD.0000000000000439) | [28749817](https://www.ncbi.nlm.nih.gov/pubmed/28749817) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ezzat_2012.pdf` | Ezzat HM et al., Incidence, predictors and significance…, Leukemia & lymphoma (2012) | pgx | 7 | [10.3109/10428194.2012.697560](https://doi.org/10.3109/10428194.2012.697560) | [22642935](https://www.ncbi.nlm.nih.gov/pubmed/22642935) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Marcantonio_2014.pdf` | Marcantonio EE et al., Prednisone has no effect on the pharmac…, Journal of clinical pharmac… (2014) | pgx | 7 | [10.1002/jcph.338](https://doi.org/10.1002/jcph.338) | [24895078](https://www.ncbi.nlm.nih.gov/pubmed/24895078) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wilde_2007.pdf` | Wilde S et al., Population pharmacokinetics of the BEAC…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746040-00005](https://doi.org/10.2165/00003088-200746040-00005) | [17375983](https://www.ncbi.nlm.nih.gov/pubmed/17375983) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Bartlett_2019.pdf` | Bartlett FE et al., Tacrolimus Concentration-to-Dose Ratios…, Pharmacotherapy (2019) | pgx | 5 | [10.1002/phar.2300](https://doi.org/10.1002/phar.2300) | [31230376](https://www.ncbi.nlm.nih.gov/pubmed/31230376) | metadata signals extractable PGX data (CYP3A5) |
| `Sam_2011.pdf` | Sam WJ et al., Associations of ABCB1 3435C&gt;T and IL-10…, Transplantation (2011) | pgx | 5 | [10.1097/TP.0b013e3182384ae2](https://doi.org/10.1097/TP.0b013e3182384ae2) | [22094953](https://www.ncbi.nlm.nih.gov/pubmed/22094953) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-04T19:50:26.451298+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Artero_1992 | not_relevant | 0 | 0 | The paper discusses the clinical course and treatment of recurrent focal glomerulosclerosis in transplant patients but does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of prednisone. |
| PGx | Bartlett_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of tacrolimus (CYP3A5), not prednisone. |
| popPK | Bergmann_2012 | irrelevant | 2 | 0 | The paper is a review article discussing the pharmacokinetics of prednisone/prednisolone in transplantation but does not report original quantitative parameter values (CL, V, etc.) in the provided text. |
| popPK | Blanchet_2018 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Blanchet_2018 | not_relevant | 0 | 0 | The paper focuses on the PK/PD of abiraterone, not prednisone. |
| PGx | Bussel_2021 | not_relevant | 0 | 0 | The paper discusses the management of fetal and neonatal alloimmune thrombocytopenia and potential therapeutic advances, but does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of prednisone. |
| popPK | Chakraborty_1999 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Chakraborty_1999 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| PGx | Concha_2023 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tacrolimus, not prednisone. |
| PGx | Crowe_2012 | not_relevant | 0 | 0 | The study examines P-glycoprotein transport mechanisms in Caco-2 cells but does not report pharmacogenomic effects (gene variants) on PK/PD parameters in humans. |
| PGx | Davies_1992 | not_relevant | 0 | 0 | The paper reports clinical outcomes (survival, rejection) of transplant protocols and does not investigate pharmacogenomic effects on prednisone PK or PD parameters. |
| popPK | Deng_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polatuzumab vedotin, and prednisone is only mentioned as a co-administered drug in the R-CHP regimen. |
| PD | Deng_2024 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationship for polatuzumab vedotin (and its payload MMAE), not prednisone. |
| PGx | Ezzat_2012 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (protease inhibitors and vinblastine) and clinical toxicity in HIV-HL patients, not pharmacogenomic effects on prednisone PK/PD. |
| PGx | Faria_2019 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP enzymes and prednisone as an inducer, but does not report pharmacogenomic effects (gene variants) on prednisone's PK or PD parameters. |
| popPK | Fu_2025 | irrelevant | 0 | 0 | The paper is a clinical trial analysis of patient-reported outcomes (quality of life) in multiple myeloma patients, containing no pharmacokinetic data for prednisone. |
| popPK | Furie_2021 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for dapirolizumab pegol in SLE and does not report pharmacokinetic parameters for prednisone. |
| PD | Furie_2021 | not_relevant | 0 | 0 | The paper reports a dose-response analysis for dapirolizumab pegol (DZP), not prednisone; prednisone is only mentioned as a background standard-of-care medication. |
| PGx | Gruber_1980 | not_relevant | 0 | 0 | The paper is a clinical case report describing the treatment of vesicular pemphigoid with prednisone and methotrexate, but it does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Hanot_2020 | not_relevant | 2 | 5 | The paper reports changes in gene expression (NR3C1α) associated with clinical resistance, but does not report a pharmacogenomic effect on a specific PK or PD parameter (e.g., AUC, Cmax, receptor binding affinity) linked to a specific genotype. |
| PGx | Hedrich_2016 | not_relevant | 0 | 0 | The paper is a review of CYP2B6-mediated drug-drug interactions and does not report pharmacogenomic effects on the PK or PD of prednisone. |
| PGx | Hejazian_2020 | not_relevant | 2 | 0 | The text is a review introduction/abstract discussing general concepts of pharmacogenetics in nephrotic syndrome without reporting specific quantitative PK/PD effect sizes for prednisone. |
| popPK | Honoré_2014 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Honoré_2014 | not_relevant | 1 | 0 | The paper is a review discussing the status of PK/PD approaches in 2014 and does not present original data or numeric PD parameters for prednisone. |
| PGx | Huang_2024 | not_relevant | 0 | 0 | The paper investigates a splice variant (CENPK-delta8) associated with resistance to Abiraterone, not a pharmacogenomic effect on the PK/PD of prednisone. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports drug-herb interactions (St. John's Wort) affecting PK parameters, but does not report pharmacogenomic effects (gene variants) on prednisone. |
| PGx | Jacqz-Aigrain_1994 | not_relevant | 0 | 0 | The paper studies TPMT activity and its effect on thiopurine metabolism, not the pharmacokinetics or pharmacodynamics of prednisone. |
| PGx | Jiang_2022 | not_relevant | 0 | 0 | The paper reports a prediction model for a clinical adverse event (osteonecrosis) based on genetic risk scores, but does not report changes in pharmacokinetic or pharmacodynamic parameters of prednisone. |
| PGx | Kerstens_1994 | not_relevant | 0 | 0 | The paper investigates the association between purine enzyme activities and response to azathioprine, not the pharmacokinetics or pharmacodynamics of prednisone. |
| PGx | Kishi_2004 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on etoposide disposition, not prednisone. |
| PGx | Kurian_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of cyclophosphamide and CITCO, not prednisone. |
| PGx | Landes_1995 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of lansoprazole and mentions prednisone only in the context of drug-drug interaction studies, without reporting any pharmacogenomic effects on prednisone. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The study is a clinical prognostic analysis of pediatric IgA nephropathy and does not report pharmacokinetic parameters for prednisone. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rituximab, and prednisone is only mentioned as a component of the R-CHOP chemotherapy regimen. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for rituximab, not prednisone. |
| PGx | Lopez-Alcorocho_1995 | not_relevant | 0 | 0 | The paper studies the effect of prednisone on HBV viral variants and ALT levels, not the effect of human gene variants on prednisone pharmacokinetics or pharmacodynamics. |
| PGx | Mallette_1980 | not_relevant | 0 | 0 | The paper describes a clinical case of hypercalcemia responding to prednisone but does not report any pharmacogenomic analysis or gene variants affecting PK/PD parameters. |
| PGx | Mao_2024 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (prednisone affecting mycophenolate mofetil PK) and does not report any pharmacogenomic effects (gene variants) on prednisone PK/PD. |
| PGx | Marcantonio_2014 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (prednisone affecting CYP3A4 substrates) in a general population, not the effect of a specific gene variant on prednisone's PK/PD. |
| PGx | Michalska_2023 | not_relevant | 0 | 0 | The study reports an association between the SLCO1B1 genotype and overall survival in multiple myeloma patients treated with Melphalan-Prednisone, but it does not report any pharmacokinetic or pharmacodynamic parameters of prednisone. |
| popPK | Miranda_2026 | irrelevant | 0 | 0 | The study is an ecotoxicological and biodegradation assessment in aquatic microorganisms, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Miranda_2026 | not_relevant | 0 | 0 | The paper reports ecotoxicological assays showing no significant effect of prednisone on aquatic organisms up to 100 mg/L, explicitly stating that EC50 values could not be estimated, and thus provides no extractable pharmacodynamic parameters. |
| PGx | Nademanee_1995 | not_relevant | 0 | 0 | The paper reports clinical outcomes of bone marrow transplantation using prednisone for GVHD prophylaxis but does not investigate pharmacogenomic effects on prednisone pharmacokinetics or pharmacodynamics. |
| PGx | Norman_1991 | not_relevant | 0 | 0 | The paper reports clinical outcomes of renal transplantation and does not investigate pharmacogenomic effects on prednisone PK or PD parameters. |
| popPK | Patel_2023 | irrelevant | 0 | 0 | The study investigates the effect of prednisone on hemoglobin A1c levels (glycemic outcomes) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Podolanczuk_2022 | not_relevant | 0 | 0 | The paper describes a clinical trial design for N-acetylcysteine (NAC) in IPF patients, not a pharmacogenomic study of prednisone. |
| popPK | Pérez-Blanco_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of doxorubicin and doxorubicinol, not prednisone. |
| PGx | Ramos-Peñafiel_2020 | not_relevant | 2 | 5 | The paper reports associations between ABCB1 expression and clinical response (steroid response/complete remission) but does not report changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters of prednisone itself. |
| PGx | Reséndiz-Galván_2020 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the pharmacokinetics of mycophenolic acid (MPA), not prednisone. |
| PGx | Riglet_2020 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the pharmacokinetics of mycophenolic acid (MPA), not prednisone. |
| PGx | Romano-Aguilar_2020 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid (MPA), not prednisone, and reports a drug-drug interaction (prednisone affecting MPA clearance) rather than a pharmacogenomic effect on prednisone. |
| PGx | Rossi_2017 | not_relevant | 0 | 0 | The paper focuses on using liquid biopsy (cfDNA) to track tumor mutations and treatment response in DLBCL, not on how host gene variants affect the pharmacokinetics or pharmacodynamics of prednisone. |
| PGx | Sam_2011 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on sirolimus, not prednisone. |
| popPK | Samineni_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax, with prednisone serving only as a co-administered component of the R-CHOP regimen. |
| PD | Samineni_2022 | not_relevant | 0 | 0 | The paper reports exposure-response analyses for venetoclax, not prednisone. |
| PGx | Santoro_2011 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for cyclosporine and tacrolimus, not prednisone. |
| PGx | Santoro_2012 | not_relevant | 0 | 0 | The paper reports a case of TINU syndrome and HLA associations, but does not report any pharmacogenomic effect on the PK or PD parameters of prednisone. |
| popPK | Sassen_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ciprofloxacin, not prednisone (which is only mentioned as a concomitant medication). |
| PGx | Shibata_1998 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring glucocorticoids and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Skauby_2017 | not_relevant | 3 | 2 | The study analyzes genetic variants (CYP3A5, ABCB1) but explicitly states that causality cannot be definitive due to the limited sample size, and does not report a fitted quantitative pharmacogenomic effect size on PK parameters. |
| popPK | Sun_2010 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cyclosporine, not prednisone, which is only a covariate. |
| PGx | Terrier_2025 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (dexamethasone/prednisone affecting apixaban/rivaroxaban PK) and does not report pharmacogenomic effects on prednisone PK/PD. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance and explicitly states that prednisone was not found to influence theophylline disposition; it does not report pharmacogenomic effects on prednisone PK/PD. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tacrolimus pharmacokinetics, not prednisone. |
| PGx | Wilde_2007 | not_relevant | 0 | 0 | The study analyzes population pharmacokinetics and toxicity of the BEACOPP regimen but does not report specific pharmacogenomic effects (gene variants) on prednisone PK/PD parameters. |
| PGx | Wu_2020 | not_relevant | 2 | 5 | The study reports associations between gene variants and clinical outcomes (PSA response, survival) for abiraterone, not pharmacokinetic or pharmacodynamic parameters of prednisone. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of daratumumab, and prednisone is only mentioned as a co-administered drug in a combination regimen. |
| PD | Xu_2018 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationship for daratumumab, not prednisone. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomic effect of CYP3A5 on Tacrolimus, not Prednisone. |
| PGx | Zhang_2022 | not_relevant | 2 | 5 | The study reports differences in clinical efficacy and biomarker levels (THSD7A-Ab, etc.) between CYP2B6 genotypes, but does not measure or report pharmacokinetic (PK) or pharmacodynamic (PD) parameters of prednisone itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 19:50 UTC</sub>
