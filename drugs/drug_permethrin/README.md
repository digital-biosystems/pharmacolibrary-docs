<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;permethrin&quot;}]"></div>

# permethrin

- **generic name:** permethrin
- **ATC codes:** `P03AC04`
- **DrugBank:** [DB04930](https://go.drugbank.com/drugs/DB04930) · **PubChem:** [CID 40326](https://pubchem.ncbi.nlm.nih.gov/compound/40326)
- **molar mass:** 391.288 g/mol (C21H20Cl2O3) — DrugBank
- **groups:** approved, investigational

## About

Permethrin is a pyrethroid used to treat scabies and lice infestations. It is administered topically as creams, lotions, shampoos, or other liquids for skin application. It is listed as a World Health Organization essential medicine and is widely used.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q411635](https://www.wikidata.org/wiki/Q411635), [Wikipedia](https://en.wikipedia.org/wiki/Permethrin?oldid=1380028185) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| permethrin | parent | 391.288 | C21H20Cl2O3 | DrugBank | [40326](https://pubchem.ncbi.nlm.nih.gov/compound/40326) | Anadón_1991, Côté_2014, Gögebakan_2015 |
| cis-DCCA | metabolite | 209.066 | C8H10Cl2O2 | PubChem | [41507](https://pubchem.ncbi.nlm.nih.gov/compound/41507) | Côté_2014 |
| m-phenoxybenzoic acid (3-PBA) | metabolite | 214.22 | C13H10O3 | PubChem | [19539](https://pubchem.ncbi.nlm.nih.gov/compound/19539) | Anadón_1991, Côté_2014 |
| m-phenoxybenzyl alcohol | metabolite | 200.237 | C13H12O2 | PubChem | [26295](https://pubchem.ncbi.nlm.nih.gov/compound/26295) | Anadón_1991 |
| trans-DCCA | metabolite | 209.066 | C8H10Cl2O2 | PubChem | [41539](https://pubchem.ncbi.nlm.nih.gov/compound/41539) | Côté_2014 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Anadón_1991_reference](drugs/drug_permethrin/Permethrin_Anadn1991_reference.md) | — | general linear (no model) | 7 | Anadón A et al., Toxicokinetics of permethrin in the rat, Toxicology and applied phar… (1991) | [10.1016/0041-008x(91)90284-l](https://doi.org/10.1016/0041-008x(91)90284-l) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Côté_2014_reference](drugs/drug_permethrin/Permethrin_Ct2014_reference.md) | — | general linear (no model) | 1 | Côté J et al., A novel toxicokinetic modeling of cyper…, PloS one (2014) | [10.1371/journal.pone.0088517](https://doi.org/10.1371/journal.pone.0088517) |
| <span class="pk-rf" hidden data-species="bird" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Gögebakan_2015_reference](drugs/drug_permethrin/Permethrin_Ggebakan2015_reference.md) | — | 1-compartment (no model) | 7 | Gögebakan T et al., Single-dose toxicokinetics of permethri…, British poultry science (2015) | [10.1080/00071668.2015.1085957](https://doi.org/10.1080/00071668.2015.1085957) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Roth_2025_mortality](drugs/drug_permethrin/pd_Roth_2025_mortality.md) | Larval mortality in feeding bioassay ← permethrin · inhibition effect | — | Roth MA et al., Optimizing Feeding and Pupation Bioassa…, Archives of insect biochemi… (2025) | [10.1002/arch.70023](https://doi.org/10.1002/arch.70023) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other animal</span> | [Suter_2017_mortality](drugs/drug_permethrin/pd_Suter_2017_mortality.md) | 24 h mortality biomarker turnover ← permethrin | — | Suter T et al., Insecticide susceptibility of Aedes alb…, Parasites & vectors (2017) | [10.1186/s13071-017-2364-5](https://doi.org/10.1186/s13071-017-2364-5) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | **CYP6BB2** | `Q44` · fe | metabolism | [Kasai_2014](drugs/drug_permethrin/pgx_Kasai_2014_CYP6BB2_Q44.md) | Kasai S et al., Mechanisms of pyrethroid resistance in…, PLoS neglected tropical dis… (2014) | [10.1371/journal.pntd.0002948](https://doi.org/10.1371/journal.pntd.0002948) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | **CYP9M6** | `Q44` · fe | metabolism | [Kasai_2014](drugs/drug_permethrin/pgx_Kasai_2014_CYP9M6_Q44.md) | Kasai S et al., Mechanisms of pyrethroid resistance in…, PLoS neglected tropical dis… (2014) | [10.1371/journal.pntd.0002948](https://doi.org/10.1371/journal.pntd.0002948) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | **Vssc** | `Q321` · EC50 | target | [Kasai_2014](drugs/drug_permethrin/pgx_Kasai_2014_Vssc_Q321.md) | Kasai S et al., Mechanisms of pyrethroid resistance in…, PLoS neglected tropical dis… (2014) | [10.1371/journal.pntd.0002948](https://doi.org/10.1371/journal.pntd.0002948) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:15 | 0:07 | 0/3/0 | 2/0/0 | 0/0/3 | 3,942/170 | einfracz / qwen3.8-27b | 56 | 5/51 | 55/1 | 0 |

## Coverage

- **PubMed hits:** 255 matched, 143 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abu-Qare_2003 | relevant | 7 | 2 | The paper investigates the pharmacokinetic and toxicological effects of combined DEET and permethrin exposure in rats, describing alterations in pharmacokinetic profiles, but the specific quantitative numeric parameter values (CL, V, etc.) are not present in the provided evidence, which focuses on biomarkers and general profile changes. |
| PGx | Abu-Qare_2003 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic and toxicological effects of combined chemical exposure in rats, not pharmacogenomic effects of genetic variants. |
| PGx | Abuelmaali_2013 | not_relevant | 2 | 5 | Reports kdr L1014F association with permethrin survivorship in mosquitoes (insecticide resistance), not a pharmacogenomic effect on a PK/PD parameter of permethrin as a drug. |
| PGx | Ahmad_2016 | not_relevant | 0 | 0 | Mosquito kdr genotype vs insecticide susceptibility in vectors, not a pharmacogenomic effect on permethrin PK/PD in humans. |
| popPK | Ahn_2004 | irrelevant | 0 | 0 | The paper describes the development of an immunoassay for a permethrin metabolite and does not report pharmacokinetic parameters. |
| PGx | Ahn_2004 | not_relevant | 0 | 0 | The paper describes the development of an immunoassay (ELISA) for detecting a permethrin metabolite and contains no information regarding genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ahoua_2012 | not_relevant | 2 | 4 | Insecticide resistance study in mosquitoes; kdr genotype is associated with survival/KDT50 to permethrin but no fitted genotype effect on a PK/PD parameter, and this is vector toxicology, not pharmacogenomics of a drug in humans. |
| popPK | Aldridge_2017 | irrelevant | 0 | 0 | The paper reports insecticide dose-response curves (LD50/LD90) in mosquitoes, not pharmacokinetic disposition parameters. |
| PGx | Aldridge_2017 | not_relevant | 0 | 0 | The paper reports insecticide toxicity (LD90) in insects based on application site, not a pharmacogenomic effect on a PK/PD parameter. |
| popPK | Amaraneni_2017 | irrelevant | 4 | 1 | The study reports tissue:plasma partition coefficients (PCs) for permethrin in rats, but does not provide standard quantitative disposition parameters like clearance, volume, or half-life, and specific numeric values are not visible in the abstract. |
| PGx | Amaraneni_2017 | not_relevant | 0 | 0 | The paper investigates the effect of age (maturation) on the PK of permethrin, not the effect of genetic variants (pharmacogenomics). |
| PGx | Anadón_1991 | not_relevant | 0 | 0 | The paper reports toxicokinetics in rats but does not investigate or report any pharmacogenomic effects (gene variants, genotypes, or phenotypes) on permethrin's PK parameters. |
| popPK | Anderson_2008 | irrelevant | 0 | 0 | The study is an ecotoxicology dose-response comparison of amphipod sensitivity to chemicals and does not report pharmacokinetic parameters for permethrin. |
| PGx | Anderson_2008 | not_relevant | 0 | 0 | The paper compares toxicity test protocols using two amphipod species; it does not report on pharmacogenomic effects of permethrin. |
| PGx | Assogba_2014 | not_relevant | 0 | 0 | Reports insecticide resistance alleles (kdrR, ace-1R) affecting mosquito mortality/knockdown to permethrin, not a pharmacokinetic or pharmacodynamic parameter of permethrin as a drug. |
| popPK | Bagi_2015 | irrelevant | 0 | 0 | This paper reports insecticide resistance bioassay data (mortality, LT50, LC50) for mosquitoes, not population pharmacokinetic parameters (CL, V, etc.) for permethrin in a mammalian or human subject. |
| PGx | Bagi_2015 | not_relevant | 0 | 0 | The paper investigates insecticide resistance phenotypes in malaria vectors (Anopheles gambiae) using bioassays, rather than reporting pharmacogenomic effects on human pharmacokinetics or pharmacodynamics. |
| PGx | Bamou_2021 | not_relevant | 2 | 3 | This is an insecticide resistance study in mosquitoes; kdr/genotypes affect mosquito mortality to permethrin, not a human PK/PD parameter of the drug. |
| popPK | Barua_2026 | irrelevant | 0 | 0 | This is a review of AI/ML toxicity prediction; permethrin appears only as a toxic-dose table entry (150 mg/kg rat, neurotoxicity) with no PK parameters. |
| popPK | Bennett_2004 | irrelevant | 0 | 0 | The paper describes a fugacity-based mass-balance model for pesticide transport in indoor environments and does not contain pharmacokinetic data for permethrin. |
| PGx | Bennett_2004 | not_relevant | 0 | 0 | The paper describes a fugacity-based environmental fate model for indoor pesticides and contains no information regarding permethrin pharmacokinetics or pharmacogenomics. |
| popPK | Bondy_1987 | irrelevant | 0 | 0 | The study is mechanistic, examining the modulation of enzyme activity (ornithine decarboxylase) by insecticides, and reports no pharmacokinetic parameters (CL, V, t1/2) for permethrin. |
| PGx | Bondy_1987 | not_relevant | 0 | 0 | The paper investigates the toxicological effects of permethrin on ornithine decarboxylase activity, but it does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bringolf_2007 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of pesticide toxicity to freshwater mussels, not a pharmacokinetic study measuring disposition parameters for permethrin. |
| PGx | Bringolf_2007 | not_relevant | 0 | 0 | The paper investigates general toxicity of pesticides to freshwater mussels and does not contain any information regarding pharmacogenomics or gene variants affecting permethrin PK/PD. |
| PGx | Campbell_2019 | not_relevant | 2 | 3 | Reports gene associations with insecticide resistance (knockdown/survival) in mosquitoes, not a pharmacogenomic effect on permethrin PK/PD parameters. |
| popPK | Cao_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium influx in neurons, not a pharmacokinetic study, and reports no disposition parameters for permethrin. |
| PGx | Cao_2011 | not_relevant | 0 | 0 | The study investigates the mechanism of pyrethroid action on calcium influx in neurons but does not involve genetic variants, genotypes, or pharmacogenomics. |
| popPK | Choi_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of enzyme inhibition in human liver fractions, not a pharmacokinetic study reporting disposition parameters for permethrin. |
| PGx | Choi_2004 | not_relevant | 0 | 0 | The paper reports chemical inhibition of permethrin hydrolysis by other compounds, not a pharmacogenomic effect based on gene variants or genotypes. |
| popPK | Christen_2014 | irrelevant | 0 | 0 | The study focuses on in vitro toxicology (antiandrogenic activity) of permethrin mixtures and does not report any pharmacokinetic parameters. |
| PGx | Christen_2014 | not_relevant | 0 | 0 | The study investigates the antiandrogenic activity of pesticide mixtures in cell cultures and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of permethrin. |
| popPK | Ciura_2025 | irrelevant | 0 | 0 | In-vitro IAM chromatography study of pesticide lipophilicity/bioaccumulation; permethrin is only one of 19 analytes with a CHIIAM value, no PK disposition parameters (CL, V, ka, half-life, PK model). |
| popPK | Das_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and CYP induction, containing no pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| PGx | Das_2008 | not_relevant | 0 | 0 | The study investigates CYP induction and cytotoxicity in vitro without analyzing the impact of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | DeLorenzo_2012 | irrelevant | 0 | 0 | The paper is a comparative risk assessment of pesticide toxicity (LC50/EC50) in aquatic species, not a pharmacokinetic study, and contains no PK parameters for permethrin. |
| PGx | DeLorenzo_2012 | not_relevant | 0 | 0 | The paper reports ecological risk assessment and species toxicity data for permethrin, containing no information on pharmacogenomics or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Ding_2012 | irrelevant | 0 | 0 | The study reports acute toxicity metrics (LC50/EC50) for invertebrates, not pharmacokinetic disposition parameters (CL, V, t1/2) for permethrin. |
| PGx | Ding_2012 | not_relevant | 0 | 0 | The paper describes a toxicological method using SPME fibers and does not investigate pharmacogenomic effects on permethrin PK/PD. |
| popPK | Dreyer_2019 | irrelevant | 0 | 0 | This is a mosquito mortality/sterility study of fipronil and ivermectin in cattle; permethrin appears only in a CDC bottle bioassay susceptibility test with no PK parameters. |
| popPK | Du_2013 | irrelevant | 0 | 0 | The study reports ecotoxicological endpoints (mortality, growth, reproduction) and effect concentrations (EC50) rather than pharmacokinetic parameters (CL, V, t1/2). |
| PGx | Du_2013 | not_relevant | 0 | 0 | The study examines chronic toxicity and bioavailability of permethrin in Chironomus dilutus (an invertebrate) and does not involve human pharmacogenomics or PK/PD parameters. |
| popPK | Duthaler_2021 | irrelevant | 0 | 0 | This is a PK study of ivermectin in mosquitoes; permethrin is only mentioned as a prior topical study reference, with no permethrin parameters reported. |
| popPK | Eells_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotoxic effects on rat synaptosomes and does not report pharmacokinetic disposition parameters. |
| PGx | Eells_1992 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of pyrethroids on rat synaptosomes but does not report any pharmacogenomic effects or variations in PK/PD parameters based on gene variants. |
| popPK | Eiden_2015 | irrelevant | 0 | 0 | The study reports acaricide resistance (dose-response) in ticks, not pharmacokinetic disposition parameters (CL, V, t1/2) for permethrin. |
| PGx | Eiden_2015 | not_relevant | 0 | 0 | The paper describes phenotypic resistance and dose-response curves for ticks but does not report specific gene variants or genotypes linked to pharmacokinetic or pharmacodynamic parameter changes. |
| popPK | Emberley-Korkmaz_2025 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of permethrin in rainbow trout cell lines and does not report pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PGx | Emberley-Korkmaz_2025 | not_relevant | 0 | 0 | The paper reports general cytotoxicity of pesticides in cell lines and does not investigate genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Endersby-Harshman_2021 | not_relevant | 0 | 0 | This is an insecticide resistance study in mosquitoes (Vssc mutations vs. bioassay survival), not a pharmacogenomic effect on permethrin PK/PD parameters in a pharmacological model. |
| PGx | Fadel_2019 | not_relevant | 2 | 3 | Reports kdr allele frequency and mortality associations in mosquitoes, but no genotype-specific effect on permethrin PK/PD parameters. |
| popPK | Feng_2009 | irrelevant | 0 | 0 | The study evaluates the antifouling activity (anti-settlement in barnacles) of pyrethroids, not the pharmacokinetics or disposition parameters of permethrin. |
| PGx | Feng_2009 | not_relevant | 0 | 0 | The paper evaluates the antifouling activity of pyrethroids on barnacles and does not report any pharmacogenomic effects or PK/PD parameters. |
| popPK | Garcia_2014 | irrelevant | 0 | 0 | The study assesses insecticide toxicity/mortality in mollusks, not the pharmacokinetics of permethrin. |
| PGx | Garcia_2014 | not_relevant | 0 | 0 | The paper focuses on insecticide toxicity in oysters and clams and does not report pharmacogenomic effects on permethrin PK/PD parameters. |
| popPK | Gellatly_2016 | irrelevant | 0 | 0 | The study analyzes knockdown resistance mutation frequencies in head lice (Pediculus humanus) and is not a pharmacokinetic study of permethrin in a host species. |
| PGx | Gellatly_2016 | not_relevant | 0 | 0 | The paper reports insecticide resistance mechanisms in head lice (vectors), not human pharmacogenomics affecting permethrin PK or PD parameters in patients. |
| PGx | Githinji_2020 | not_relevant | 2 | 3 | Reports kdr genotype association with mosquito knockdown/mortality to permethrin (insecticide resistance), not a pharmacogenomic effect on a PK/PD parameter of permethrin as a drug. |
| popPK | Gwee_2020 | irrelevant | 0 | 0 | This is a population PK study of ivermectin, not permethrin; permethrin is only mentioned as a topical comparator, and full model parameters are in supplementary material anyway. |
| PGx | Gögebakan_2015 | not_relevant | 0 | 0 | The study reports toxicokinetics of permethrin in broiler chickens but does not investigate any gene variants, genotypes, or phenotypes affecting PK/PD parameters. |
| popPK | Hasenbein_2015 | irrelevant | 0 | 0 | The paper reports ecotoxicological endpoints (immobility, growth) in aquatic organisms (Chironomus dilutus) rather than pharmacokinetic parameters for permethrin. |
| PGx | Hasenbein_2015 | not_relevant | 0 | 0 | The paper studies toxicological effects of pesticide mixtures on aquatic organisms and does not involve human pharmacogenomics, gene variants, or PK/PD parameters of permethrin in a clinical context. |
| PGx | Hearn_2022 | not_relevant | 3 | 3 | Insecticide-resistance association study in mosquitoes; CYP9K1 does not metabolise permethrin and no PK/PD parameter effect is reported. |
| popPK | Hedges_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme-mediated metabolism (intrinsic clearance) and does not report population pharmacokinetic parameters (CL, V, Q, ka, t1/2) for the drug in a biological system. |
| PGx | Hedges_2019 | not_relevant | 2 | 3 | The study describes in vitro metabolism by expressed enzymes without analyzing specific human genetic variants or their impact on in vivo pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hodgson_2005 | irrelevant | 0 | 0 | The paper is a review of in-vitro human metabolism studies (microsomes/cells) and does not report in-vivo quantitative pharmacokinetic disposition parameters (CL, V, ka) for permethrin. |
| PGx | Hodgson_2005 | not_relevant | 3 | 0 | The text only mentions that metabolism of permethrin and other chemicals by polymorphic variants has been studied in general, but it does not report specific data, effect sizes, or conclusions on how gene variants affect PK/PD parameters for permethrin in this paper. |
| popPK | Hodgson_2007 | irrelevant | 0 | 0 | The paper is a review discussing in vitro metabolic interactions (enzyme inhibition/induction) of permethrin in human hepatocytes, not a pharmacokinetic study reporting quantitative disposition parameters like CL or V. |
| PGx | Hodgson_2007 | not_relevant | 0 | 0 | The paper reports drug-drug interactions between environmental chemicals and permethrin metabolism, not pharmacogenomic effects of gene variants on permethrin PK/PD. |
| popPK | Hodgson_2008 | irrelevant | 0 | 0 | The paper discusses in vitro metabolic interactions (enzyme inhibition/induction) rather than quantitative pharmacokinetic disposition parameters for permethrin. |
| PGx | Hodgson_2008 | not_relevant | 0 | 0 | The text discusses metabolic interactions (inhibitors like chlorpyrifos) affecting permethrin hydrolysis, not the effect of a specific gene variant, genotype, or phenotype on PK/PD parameters. |
| popPK | Hughes_2016 | irrelevant | 2 | 1 | The study reports qualitative findings on blood/brain correlation and Emax parameters for a mixture, but lacks specific quantitative PK parameters (CL, V, t1/2) for permethrin. |
| PGx | Hughes_2016 | not_relevant | 0 | 0 | The study examines PK/PD in wild-type rats and does not investigate gene variants or pharmacogenomics. |
| popPK | Hutton_2024 | irrelevant | 0 | 0 | The study investigates the multigenerational toxicity of bifenthrin, cyfluthrin, and cyhalothrin in fish, not the pharmacokinetics of permethrin. |
| PGx | Hutton_2024 | not_relevant | 0 | 0 | The study investigates the environmental toxicity of pyrethroids (bifenthrin, cyfluthrin, cyhalothrin) in fish, not the pharmacogenomics of permethrin in humans or animals. |
| popPK | Ioannou_2023 | irrelevant | 0 | 0 | This is a dietary intervention trial measuring urinary pesticide exposure biomarkers (3-PBA, 6-CN), not a permethrin PK study; no disposition parameters for permethrin are reported. |
| popPK | Ireland_2026 | irrelevant | 0 | 0 | The paper describes a behavioral neurotoxicity screening study in planarians and does not report any pharmacokinetic disposition parameters (CL, V, Q, ka) for permethrin. |
| PGx | Ireland_2026 | not_relevant | 0 | 0 | The paper reports planarian behavioral responses to chemicals, including permethrin, but does not investigate human gene variants or their effects on pharmacokinetic/pharmacodynamic parameters. |
| PGx | Ishak_2016 | not_relevant | 3 | 5 | Reports CYP6P12 over-expression association with permethrin resistance (mortality/knockdown in mosquitoes/flies), not a gene-variant effect on a PK/PD parameter of permethrin. |
| popPK | Jiang_2019 | irrelevant | 0 | 0 | The study evaluates spatial repellency of DEET, citronella, IR3535, and transfluthrin, not the pharmacokinetics of permethrin. |
| PGx | Jiang_2019 | not_relevant | 0 | 0 | The paper evaluates spatial repellency and toxicity of mosquito repellents (DEET, citronella, etc.) in mosquitoes, not permethrin pharmacogenomics in humans. |
| popPK | Jones_2010 | irrelevant | 0 | 0 | The paper focuses on in silico homology modeling of Drosophila P450 enzymes and their structural compatibility with permethrin, providing no pharmacokinetic data or quantitative disposition parameters. |
| PGx | Jones_2010 | not_relevant | 0 | 0 | The paper focuses on homology modelling of Drosophila P450 enzymes and states that the CYP6G1 active site does not accommodate permethrin, implying no PK effect via this pathway, but it does not report quantitative pharmacogenomic data for humans. |
| popPK | Kengne-Ouafo_2026 | irrelevant | 0 | 0 | The study focuses on the molecular mechanism of insecticide resistance (CYP6P3 mutation) in mosquitoes and in vitro metabolism assays, not on the pharmacokinetic disposition parameters (CL, V, t1/2) of permethrin in a host species. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The paper is a behavioral study on mosquito attraction to lures and susceptibility to permethrin, containing no pharmacokinetic data (CL, V, t1/2) for permethrin. |
| PGx | Kim_2021 | not_relevant | 1 | 5 | The paper studies mosquito attraction to a commercial lure (BG-lure), not the PK/PD of permethrin; permethrin-resistance is only a phenotypic tag for one mosquito strain. |
| popPK | Knaak_2012 | irrelevant | 2 | 0 | This is a review paper discussing the status of parameters for pyrethroid models, and while it mentions a specific permethrin absorption value in monkeys, it does not report original quantitative disposition parameters (CL, V, etc.) or a population PK model for permethrin. |
| PGx | Knaak_2012 | not_relevant | 0 | 0 | The paper is a review of physicochemical and toxicokinetic parameters for pyrethroid modeling and does not report any gene variants or their effects on pharmacokinetics or pharmacodynamics. |
| popPK | Kodavanti_1993 | irrelevant | 0 | 0 | This is an in vitro mechanistic study measuring calcium transport inhibition and cytotoxicity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Kodavanti_1993 | not_relevant | 0 | 0 | The study investigates the in vitro effects of permethrin on calcium transport and cytotoxicity in rat cerebellum without examining any genetic variants or pharmacogenomic differences. |
| PGx | Kubik_2021 | not_relevant | 2 | 4 | Reports miR-33 genotype effects on permethrin knockdown/mortality (toxicity phenotypes) in mosquitoes, not on a pharmacokinetic or pharmacodynamic parameter of permethrin. |
| popPK | Kudom_2020 | irrelevant | 0 | 0 | This is an entomological study assessing insecticide resistance in mosquitoes, not a pharmacokinetic study of permethrin in a mammalian subject. |
| PGx | Kudom_2020 | not_relevant | 0 | 0 | The study reports mosquito resistance to permethrin but does not assess pharmacokinetic or pharmacodynamic parameters of the drug in humans. |
| popPK | Kühnl_2021 | irrelevant | 3 | 0 | This is an in vitro microphysiological systems (organ-on-a-chip) study, and no numeric pharmacokinetic parameters are provided in the evidence. |
| PGx | Kühnl_2021 | not_relevant | 0 | 0 | The paper investigates pharmacokinetics in a multi-organ chip model but does not report any effects of specific gene variants or genotypes on the drug's parameters. |
| popPK | Lee_2007 | irrelevant | 0 | 0 | The study is an epidemiological analysis of oxidative stress markers in pesticide sprayers where permethrin is merely listed as a co-exposure, not a subject of pharmacokinetic modeling. |
| PGx | Lee_2007 | not_relevant | 0 | 0 | The study focuses on organophosphorus pesticide metabolism and oxidative stress, not the pharmacokinetics or pharmacodynamics of permethrin. |
| popPK | Lehmann_2024 | irrelevant | 0 | 0 | The paper models retrorsine (a pyrrolizidine alkaloid) toxicokinetics; permethrin is only mentioned as a known in-vitro CYP3A4 inducer, with no permethrin PK parameters. |
| popPK | Lin_2011 | irrelevant | 0 | 0 | This is a mechanistic in vitro study on insecticide resistance in house flies, not a pharmacokinetic study of permethrin disposition. |
| PGx | Lin_2011 | not_relevant | 2 | 0 | The paper investigates the molecular mechanisms of constitutive overexpression of CYP6D1 and lack of PB induction in a permethrin-resistant housefly strain, but does not report quantitative pharmacokinetic (PK) or pharmacodynamic (PD) parameter changes attributable to a specific gene variant. |
| popPK | Liu_2004 | irrelevant | 0 | 0 | The study assesses insecticide resistance in mosquitoes using bioassays (LC50/LC90) rather than reporting pharmacokinetic parameters (CL, V, etc.) for permethrin. |
| PGx | Liu_2004 | not_relevant | 0 | 0 | The paper reports phenotypic insecticide resistance in mosquito populations, but it does not investigate specific genetic variants or genotypes (pharmacogenomics). |
| popPK | Liu_2004_2 | irrelevant | 0 | 0 | The study investigates insecticide resistance ratios in mosquitoes, not the pharmacokinetic disposition parameters of permethrin. |
| PGx | Liu_2004_2 | not_relevant | 0 | 0 | The paper reports insecticide resistance in mosquitoes but does not specify a gene variant or genotype responsible for the phenotype. |
| popPK | McCain_1997 | irrelevant | 0 | 0 | The study is a toxicology investigation focusing on lethal interactions (LD values) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | McCain_1997 | not_relevant | 0 | 0 | The study investigates acute toxicity and drug interactions in rats without examining any genetic variants or pharmacogenomic factors. |
| popPK | McKillop_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic endpoint of paraesthesia (nerve impulse trains) in a guinea pig flank model, not on pharmacokinetic parameters like clearance or volume. |
| PGx | McKillop_1987 | not_relevant | 0 | 0 | The paper describes a toxicological study in guinea pigs and does not investigate pharmacogenomic effects of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Mehler_2017 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on sediment toxicity in freshwater invertebrates, not a pharmacokinetic study. |
| PGx | Mehler_2017 | not_relevant | 0 | 0 | The study focuses on environmental toxicology and sediment remediation methods, not human pharmacogenomics or gene-variant effects on permethrin PK/PD. |
| popPK | Meyer_2008 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological analysis of neuronal excitability and does not report any pharmacokinetic disposition parameters for permethrin. |
| PGx | Meyer_2008 | not_relevant | 0 | 0 | The paper describes the pharmacological mechanism of action of permethrin on neuronal cultures but does not report any pharmacogenomic effects (gene variants changing PK/PD parameters). |
| PGx | Mohammadi_2021 | not_relevant | 3 | 2 | Reports kdr mutation frequencies in head lice linked to permethrin resistance (PD in the insect), not a human pharmacogenomic effect on permethrin PK/PD parameters. |
| PGx | Mugenzi_2023 | not_relevant | 2 | 3 | Reports gene variants (CYP6P9a/b) associated with insecticide resistance/survival phenotypes, not changes in PK or PD parameters of permethrin. |
| popPK | Murugan_2015 | irrelevant | 0 | 0 | The paper focuses on the antimicrobial and antiplasmodial activity of silver nanoparticles, using permethrin only as a positive control in smoke toxicity experiments. |
| PGx | Murugan_2015 | not_relevant | 0 | 0 | The paper studies the efficacy of silver nanoparticles and seaweed extract against malaria vectors and parasites, containing no data on human pharmacogenomics, pharmacokinetics, or pharmacodynamics of permethrin. |
| popPK | Nachaiwieng_2021 | irrelevant | 0 | 0 | This is an insecticide efficacy study on mosquitoes, not a pharmacokinetic study reporting disposition parameters for permethrin. |
| PGx | Niang_2016 | not_relevant | 5 | 6 | Reports kdr allele frequencies and population-level permethrin KD50/KD95 times, but does not link individual genotype/phenotype to a changed PK/PD parameter with a fitted genotype effect. |
| popPK | Nolden_2022 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of CYP6P9 enzymes in mosquitoes, focusing on metabolic pathways and resistance mechanisms rather than quantitative population pharmacokinetic parameters (CL, V, t1/2) for permethrin. |
| PGx | Nolden_2022 | not_relevant | 2 | 5 | The paper describes insecticide metabolism and resistance mechanisms in mosquitoes, not human pharmacogenomics or pharmacokinetics/pharmacodynamics. |
| popPK | Nolden_2023 | irrelevant | 0 | 0 | The study focuses on the enzymatic metabolism of transfluthrin by mosquito CYP enzymes, not the pharmacokinetics of permethrin in a subject. |
| PGx | Nolden_2023 | not_relevant | 0 | 0 | The study investigates the metabolism of transfluthrin by CYP6P9 variants, not the pharmacokinetics or pharmacodynamics of permethrin. |
| popPK | Otali_2014 | irrelevant | 0 | 0 | The study investigates life-history traits and metabolic changes in mosquitoes resistant to permethrin, not the pharmacokinetic disposition of the drug. |
| PGx | Otali_2014 | not_relevant | 0 | 0 | The paper focuses on the physiological and metabolic consequences of insecticide resistance (ROS, lifespan, energy metabolism) rather than quantifying changes in permethrin pharmacokinetics (ADME) or dose-response pharmacodynamics in relation to specific genotypes. |
| popPK | Panneerselvam_2016 | irrelevant | 0 | 0 | The paper focuses on fern-synthesized nanoparticles for malaria control, with permethrin appearing only as a positive control in toxicity assays, not as a subject for PK analysis. |
| PGx | Panneerselvam_2016 | not_relevant | 0 | 0 | The paper reports the synthesis of silver nanoparticles and their anti-malarial/mosquitocidal activity, but contains no data on human pharmacogenomics, gene variants, or pharmacokinetic/pharmacodynamic parameters of permethrin. |
| popPK | Parks_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing the association between pesticide exposure and shingles risk; it does not report any pharmacokinetic parameters for permethrin. |
| PGx | Parks_2021 | not_relevant | 0 | 0 | The study examines the epidemiological association between pesticide exposure and shingles risk; it does not report pharmacogenomic effects on permethrin PK or PD parameters. |
| PGx | Porciani_2017 | not_relevant | 2 | 3 | Reports kdr genotype effects on mosquito host-seeking behavior, not on a PK/PD parameter of permethrin. |
| popPK | Prasad_2020 | irrelevant | 0 | 0 | The paper is a review of neurotoxin-induced Parkinson's disease animal models where permethrin is mentioned as a neurotoxin to induce pathology, not as a subject of pharmacokinetic analysis. |
| PGx | Prasad_2020 | not_relevant | 0 | 0 | The paper is a review of behavioral tests in animal models of Parkinson's disease induced by various neurotoxins, including permethrin, and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Priyanka_2026 | irrelevant | 0 | 0 | This is a phytochemistry/antimicrobial review of neem (Azadirachta indica); permethrin is not the subject and no PK parameters appear. |
| popPK | Punt_2022 | irrelevant | 4 | 1 | Permethrin is only one of 44 test compounds in a generic rat PBK model evaluation; its specific PK parameter values (Cmax, Clint, ka) appear to live in supplementary material/Github not provided here. |
| PGx | Quartermain_2026 | not_relevant | 0 | 0 | Paper tests permethrin's CYP induction in HepaRG cells; no gene variant/genotype effect on permethrin PK/PD parameters. |
| PGx | Quindroit_2019 | not_relevant | 0 | 0 | The paper describes a population-level PBPK model for pyrethroid exposure and does not investigate the impact of gene variants or genotypes on pharmacokinetic parameters. |
| popPK | Radu_2016 | irrelevant | 0 | 0 | The paper is a review on cyclodextrins in medical textiles and does not report pharmacokinetic parameters for permethrin. |
| PGx | Radu_2016 | not_relevant | 0 | 0 | The paper is a review on cyclodextrin applications in textiles and does not mention permethrin, gene variants, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Ranson_2004 | irrelevant | 0 | 0 | The paper is a genetic study of permethrin resistance mechanisms in mosquitoes, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ranson_2004 | not_relevant | 0 | 0 | The paper reports the genetic basis of insecticide resistance in mosquitoes, not a pharmacogenomic effect on human pharmacokinetics or pharmacodynamics. |
| popPK | Rigby_2021 | irrelevant | 0 | 0 | The study investigates the behavioral and life-history effects (fitness costs) of sublethal permethrin exposure on mosquitoes, not the pharmacokinetic parameters (clearance, volume, etc.) of permethrin. |
| PGx | Rigby_2021 | not_relevant | 4 | 1 | The study assesses phenotypic fitness responses (fecundity, lifespan) to sublethal permethrin exposure in mosquito strains with different genotypes, rather than measuring standard pharmacokinetic (PK) or pharmacodynamic (PD) drug parameters. |
| PGx | Riveron_2014 | not_relevant | 3 | 5 | Reports GSTe2 L119F association with DDT resistance and permethrin mortality in mosquitoes (insecticide toxicity, not a PK/PD parameter of permethrin as a drug); no fitted effect size on permethrin PK/PD. |
| popPK | Robert_1991 | irrelevant | 0 | 0 | The paper is a study on the repellency efficacy (ED50/ED95) of permethrin against mosquitoes, not a pharmacokinetic study of permethrin disposition. |
| PGx | Robert_1991 | not_relevant | 0 | 0 | The paper evaluates insect repellency (behavioral response) in mosquitoes, not human pharmacokinetics or pharmacodynamics, and does not report any specific gene variants affecting drug response. |
| popPK | Roos_2001 | irrelevant | 0 | 0 | The paper is a narrative review of pharmacotherapy for ectoparasitic infections and does not present original quantitative pharmacokinetic parameters (such as CL, V, or ka) for permethrin. |
| PGx | Roos_2001 | not_relevant | 0 | 0 | The paper is a general review of ectoparasite treatment options and does not contain data on genetic variants affecting the PK/PD of permethrin. |
| popPK | Rose_2005 | irrelevant | 0 | 0 | The study focuses on in-vitro metabolism and enzyme induction in human liver microsomes and hepatocytes, not on pharmacokinetic disposition parameters (CL, V, t1/2) of permethrin in a physiological system. |
| PGx | Rose_2005 | not_relevant | 0 | 0 | The paper discusses pesticide metabolism and potential enzyme induction in human hepatocytes but does not report specific gene variants (polymorphisms) altering pharmacokinetic or pharmacodynamic parameters of permethrin. |
| popPK | Roth_2025 | irrelevant | 0 | 0 | Toxicity bioassay (LC50) in beetle larvae, not a pharmacokinetic study; no disposition parameters for permethrin. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | This is a review of paediatric excipient safety; permethrin is not the subject drug and no PK parameters for it appear. |
| PGx | Saavedra-Rodriguez_2021 | not_relevant | 3 | 5 | Reports genotype associations with knockdown/recovery/death phenotypes in mosquitoes, not a fitted PK/PD parameter change for permethrin. |
| PGx | Safi_2019 | not_relevant | 2 | 5 | Reports kdr genotype and enzyme activity associations with permethrin resistance (mortality) in mosquitoes, an ecological/toxicological phenotype, not a pharmacokinetic or pharmacodynamic parameter of permethrin as a drug. |
| popPK | Scollon_2009 | irrelevant | 2 | 2 | This is an in-vitro mechanistic study reporting intrinsic clearance (CLint) from microsomes, not in-vivo disposition parameters (V, ka, t1/2) or population PK models. |
| PGx | Scollon_2009 | not_relevant | 0 | 0 | The paper describes in vitro metabolism of pyrethroids (including permethrin) by CYP450 isoforms but does not investigate specific gene variants or genotypes affecting permethrin pharmacokinetics or pharmacodynamics. |
| popPK | Shah_1987 | irrelevant | 1 | 0 | The study reports only percent penetration through the skin, not quantitative disposition parameters like clearance (CL) or volume (V). |
| PGx | Shah_1987 | not_relevant | 1 | 5 | The study investigates age-related differences in skin permeation in rats, not genetic variations (pharmacogenomics). |
| popPK | Shearer_2019 | irrelevant | 0 | 0 | The study assesses haematological alterations (blood cell counts) as a biomarker of effect, not pharmacokinetic parameters like clearance or volume. |
| PGx | Shearer_2019 | not_relevant | 0 | 0 | The study investigates haematological alterations (biological effects) following permethrin exposure but does not involve genetic variants or genotypes, thus not pharmacogenomic. |
| popPK | Shrestha_2021 | irrelevant | 0 | 0 | The study is an epidemiological analysis of olfactory impairment associated with pesticide use, not a pharmacokinetic study reporting disposition parameters for permethrin. |
| PGx | Shrestha_2021 | not_relevant | 0 | 0 | The paper reports epidemiological associations between pesticide exposure and olfactory impairment, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Simaremare_2019 | irrelevant | 0 | 0 | This is a biomonitoring exposure study measuring insecticide/metabolite concentrations in blood and urine; no PK disposition parameters (CL, V, ka, half-life with volume, or PK model) for permethrin are reported. |
| popPK | Somwang_2011 | irrelevant | 0 | 0 | The study investigates enzymatic resistance mechanisms and LC50 values in Aedes aegypti mosquitoes, not the pharmacokinetic disposition parameters (CL, V, etc.) of permethrin. |
| PGx | Somwang_2011 | not_relevant | 2 | 10 | The paper describes insecticide resistance mechanisms in mosquitoes, which is not a pharmacogenomic effect on human pharmacokinetic or pharmacodynamic parameters. |
| popPK | Spaenig_2026 | irrelevant | 0 | 0 | This is a generic PBK modeling evaluation across 26 chemicals (deltamethrin, bisphenol-A, etc.); permethrin is not the subject drug and no permethrin-specific PK parameters appear in the evidence. |
| popPK | Starr_2012 | irrelevant | 4 | 1 | The study reports qualitative toxicokinetic findings (e.g., half-lives &lt; 7h) for a pyrethroid mixture in rats but lacks specific quantitative disposition parameters (CL, V, Q, ka) for permethrin in the provided evidence. |
| PGx | Starr_2012 | not_relevant | 0 | 0 | The study investigates toxicokinetics and neurobehavioral effects of pyrethroid mixtures in rats but contains no information regarding human gene variants, genotypes, or pharmacogenomic interactions affecting permethrin's PK or PD. |
| popPK | Starr_2014 | relevant | 8 | 2 | The study is a kinetic/toxicokinetic analysis of permethrin in rats reporting tissue half-lives (&lt;5h), but specific numeric clearance, volume, or concentration values are not present in the evidence text, likely residing in figures/tables not provided. |
| PGx | Starr_2014 | not_relevant | 0 | 0 | The study is a toxicokinetic/toxicodynamic investigation in rats using a pyrethroid mixture and does not investigate human gene variants or pharmacogenomic effects. |
| popPK | Stelzer_1984 | irrelevant | 0 | 0 | The study is an in vitro immunological assay measuring mitogenic responsiveness, not a pharmacokinetic study, and contains no disposition parameters for permethrin. |
| PGx | Stelzer_1984 | not_relevant | 0 | 0 | The study describes the toxicological effects of permethrin on lymphocytes and does not report any genetic variants or their influence on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Suter_2017 | irrelevant | 0 | 0 | The paper reports insecticide susceptibility (LC50) in mosquitoes, not pharmacokinetic parameters for the drug. |
| PGx | Suter_2017 | not_relevant | 0 | 0 | The paper investigates insecticide resistance in mosquitoes, which is not a pharmacogenomic effect on a PK or PD parameter of permethrin in the context of human medicine. |
| popPK | Sylla_2013 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PGx | Sylla_2013 | not_relevant | 0 | 0 | The paper focuses on endectocides (e.g., ivermectin) for disease control and does not discuss permethrin or its pharmacogenomics. |
| popPK | Takaku_2011 | irrelevant | 1 | 0 | The paper reports in vitro metabolic mechanisms and enzyme identification (CYP/UGT) rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for permethrin itself. |
| PGx | Takaku_2011 | not_relevant | 4 | 5 | The paper suggests in silico that UGT1A9 variants might affect metabolism, but it does not report measured pharmacokinetic data or effect sizes for these variants in humans. |
| popPK | Taktak_2021 | irrelevant | 0 | 0 | This is a nanoemulsion formulation/toxicity study of pyrethroids in mosquito larvae; no pharmacokinetic disposition parameters (CL, V, ka, half-life, PK model) for permethrin are reported, only in vitro release profiles and LC50 values. |
| PGx | Tepa_2022 | not_relevant | 2 | 3 | Reports kdr allele frequencies and P450 expression associated with permethrin resistance (mortality), not a PK/PD parameter effect of a genotype. |
| popPK | Untersteiner_2024 | irrelevant | 0 | 0 | The paper is an ecotoxicological study using QSAR models to predict aquatic toxicity (LC50/EC50) of pyrethroids and organophosphates to fish and daphnia, not a pharmacokinetic study of permethrin. |
| PGx | Untersteiner_2024 | not_relevant | 0 | 0 | The paper focuses on ecological toxicology (QSAR/SSD modeling for aquatic species) and does not report human pharmacogenomics or PK/PD parameters for permethrin. |
| popPK | Usmani_2002 | irrelevant | 0 | 0 | The study investigates the metabolism of DEET, not permethrin (permethrin is only a co-administered agent in in vitro interaction assays). |
| PGx | Usmani_2002 | not_relevant | 0 | 0 | The paper investigates the metabolism of DEET, not permethrin; permethrin is only mentioned as an interacting agent affecting DEET metabolism. |
| popPK | Usmani_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of permethrin's inhibition of estradiol metabolism, not a pharmacokinetic study reporting disposition parameters for permethrin itself. |
| PGx | Usmani_2006 | not_relevant | 0 | 10 | The study investigates the inhibition of estradiol metabolism by permethrin, not the effect of a genetic variant on permethrin's pharmacokinetics or pharmacodynamics. |
| PGx | Vera-Maloof_2020 | not_relevant | 0 | 0 | Insecticide resistance (VGSC kdr alleles) affecting mosquito LC50, not a pharmacogenomic effect on permethrin PK/PD in humans. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study evaluates insecticide resistance in mosquitoes using bioassays and does not report pharmacokinetic parameters for permethrin. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The study focuses on insecticide resistance in mosquito populations and does not involve human pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Weichenthal_2010 | irrelevant | 0 | 0 | The paper is an epidemiological review of cancer incidence associated with pesticide exposure and contains no pharmacokinetic data or disposition parameters for permethrin. |
| PGx | Weichenthal_2010 | not_relevant | 0 | 0 | The paper is an epidemiological review of pesticide exposure and cancer incidence, containing no pharmacogenomic or pharmacokinetic data. |
| popPK | White_2004 | irrelevant | 0 | 0 | The study is an in vitro bioassay assessing acaricide activity (speed-of-kill) in ticks, not a pharmacokinetic study reporting disposition parameters like clearance or volume for permethrin. |
| PGx | White_2004 | not_relevant | 0 | 0 | The paper describes an in vitro microassay for testing acaricides and does not involve pharmacogenomics or gene variants affecting drug parameters. |
| popPK | Wilding_2012 | irrelevant | 0 | 0 | This is a mechanistic genetics and in-vitro enzymology study on mosquito insecticide resistance, not a pharmacokinetic study of permethrin disposition in an organism. |
| PGx | Wilding_2012 | not_relevant | 6 | 5 | The paper focuses on cis-regulatory mechanisms and gene expression (PK proxy), but lacks direct quantitative measurement of a PK/PD parameter (e.g., specific clearance rate, AUC, or ED50) linked to the variant. |
| popPK | Wolansky_2008 | irrelevant | 0 | 0 | The paper is a review of neurobehavioral toxicology and does not report any quantitative pharmacokinetic parameters for permethrin. |
| PGx | Wolansky_2008 | not_relevant | 0 | 0 | The paper is a review of the neurobehavioral toxicology of pyrethroids in animals and does not discuss pharmacogenomics or genetic variants affecting PK/PD parameters. |
| popPK | Xie_2022 | irrelevant | 0 | 0 | The study reports bioaccumulation concentrations in wild fish tissue, not pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Xie_2022 | not_relevant | 0 | 0 | The paper analyzes environmental bioaccumulation of pyrethroids in fish species based on diet and location, not human pharmacogenomics or PK/PD parameters. |
| popPK | Yamada_2017 | irrelevant | 0 | 0 | The paper is a toxicological mode of action (MOA) study focusing on lung tumor induction and cellular proliferation, not a pharmacokinetic study, and reports no quantitative disposition parameters (CL, V, ka, t1/2) for permethrin. |
| PGx | Yamada_2017 | not_relevant | 0 | 0 | The paper evaluates the mechanism of action and human relevance of mouse lung tumors but does not report pharmacogenomic effects on permethrin PK or PD parameters. |
| popPK | Yen_2025 | irrelevant | 0 | 0 | The study is an epidemiological investigation of the neurocognitive effects of permethrin metabolites (3-PBA), reporting association coefficients rather than pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PGx | Yen_2025 | not_relevant | 0 | 0 | The study investigates associations between insecticide metabolites and neurocognitive performance, not pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of permethrin. |
| popPK | Yunta_2019 | irrelevant | 0 | 0 | The study is an in vitro metabolic assay of mosquito P450s on insecticides, not a pharmacokinetic study of permethrin in a subject. |
| PGx | Yunta_2019 | not_relevant | 1 | 2 | The paper studies P450-mediated cross-resistance in mosquitoes, not human pharmacogenomics affecting permethrin pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of F-53B (a chlorinated polyfluoroalkyl ether sulfonic acid), not permethrin. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses on the PBPK modeling of F-53B (a fluorinated surfactant) and does not involve permethrin or pharmacogenomic interactions. |
| popPK | Zhao_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glutamate uptake inhibition, not a pharmacokinetic study of permethrin disposition. |
| PGx | Zhao_1995 | not_relevant | 0 | 0 | The study investigates the mechanism of action of pyrethroids on glutamate uptake and contains no pharmacogenomic data or PK/PD parameter reporting based on genetic variation. |
| popPK | de_1988 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological mechanism study on squid giant axons, not a pharmacokinetic study reporting disposition parameters. |
| PGx | de_1988 | not_relevant | 0 | 0 | The paper describes in vitro electrophysiological effects of pyrethroids on squid sodium channels and does not report any human genetic variants affecting permethrin pharmacokinetics or pharmacodynamics. |
| popPK | de_2023 | irrelevant | 0 | 0 | This is a human biomonitoring/exposure risk assessment using urinary metabolite levels and Fue fractions, not a PK study reporting disposition parameters (CL, V, ka, half-life) for permethrin. |
| popPK | malERA_2017 | irrelevant | 0 | 0 | This is a malaria eradication research agenda paper with no permethrin PK parameters or numeric disposition values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpermethrin%5D&body=Drug%3A%20permethrin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_permethrin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:04 UTC</sub>
