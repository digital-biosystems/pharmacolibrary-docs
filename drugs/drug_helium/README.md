<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;helium&quot;}]"></div>

# helium

- **generic name:** helium
- **ATC codes:** `V03AN03`
- **DrugBank:** [DB09155](https://go.drugbank.com/drugs/DB09155) · **PubChem:** [CID 23987](https://pubchem.ncbi.nlm.nih.gov/compound/23987)
- **molar mass:** 4.0026 g/mol (He) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Helium is a medical gas used in breathing mixtures, for example to help patients with airway obstruction breathe more easily. It is an approved medical gas and is also vet-approved, used mainly in hospital settings as an inhaled gas.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q560](https://www.wikidata.org/wiki/Q560) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:05 | 22:26 | 0/0/0 | 1/1/0 | 0/0/2 | 536,044/11,280 | ollama / glm-5.3-flash | 48 | 7/36 | 47/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lillo_1985_DCS](drugs/drug_helium/pd_Lillo_1985_DCS.md) | probability of decompression sickness (severe bends symptoms or death) ← helium · direct sigmoid Emax (Hill) effect | — | Lillo RS et al., Decompression outcome following saturat…, Journal of applied physiolo… (1985) | [10.1152/jappl.1985.59.5.1503](https://doi.org/10.1152/jappl.1985.59.5.1503) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shelton_1993_glycine_induced_depolarizing_current](drugs/drug_helium/pd_Shelton_1993_glycine_induced_depolarizing_current.md) | glycine-induced depolarizing current ← helium (pressure, balance helium) · direct Emax (saturable) effect | — | Shelton CJ et al., The effect of high pressure on glycine-…, Proceedings. Biological sci… (1993) | [10.1098/rspb.1993.0137](https://doi.org/10.1098/rspb.1993.0137) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shelton_1993_kainate_induced_depolarizing_current](drugs/drug_helium/pd_Shelton_1993_kainate_induced_depolarizing_current.md) | kainate-induced depolarizing current ← helium (pressure, balance helium) · direct Emax (saturable) effect | — | Shelton CJ et al., The effect of high pressure on glycine-…, Proceedings. Biological sci… (1993) | [10.1098/rspb.1993.0137](https://doi.org/10.1098/rspb.1993.0137) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2C19** | `Q45` · fm | formation | [Afzal_2016](drugs/drug_helium/pgx_Afzal_2016_CYP2C19_Q45.md) | Afzal A et al., Simultaneous Two-Vessel Subacute Stent…, Case reports in medicine (2016) | [10.1155/2016/2312078](https://doi.org/10.1155/2016/2312078) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **GSTM1** | `Q27` · CL/F | metabolism | [Ter_2025](drugs/drug_helium/pgx_Ter_2025_GSTM1_Q27.md) | Ter Heine R et al., Optimizing lazertinib therapy through G…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04828-y](https://doi.org/10.1007/s00280-025-04828-y) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=helium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` formation, `GSTM1` metabolism | PGx paper |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 1703 matched, 184 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdul_2021 | not_relevant | 0 | 0 | Paper concerns UGT1A1 mutations and phenobarbital response in Crigler-Najjar syndrome; helium is not mentioned at all. |
| PGx | Abou-Alfa_2016 | not_relevant | 0 | 0 | Interview biography with no pharmacogenomic or PK/PD data on helium. |
| PGx | Aldea-Perona_2024 | not_relevant | 0 | 0 | Historical review of Spanish pharmacology; no pharmacogenomic data on helium or any drug. |
| PGx | Alkana_1992 | not_relevant | 2 | 3 | Helium is an exposure/pressure condition, not a drug with a PK/PD parameter; genotype affects ethanol's PD response under heliox, not a pharmacogenomic effect on helium itself. |
| PGx | Bakay_1979 | not_relevant | 0 | 0 | Paper concerns HPRT variant purine metabolism, not a pharmacogenomic effect on PK/PD of helium. |
| popPK | Beach_2006 | irrelevant | 0 | 0 | This is a study of physician-patient communication and respect, with no pharmacokinetic data for helium or any drug. |
| popPK | Berdine_1988 | irrelevant | 3 | 2 | Lung washout kinetics of helium as a tracer gas in baboons; no numeric PK parameters (CL, V, half-life) are reported, only qualitative decay-rate ordering. |
| PGx | Brito_2017 | not_relevant | 0 | 0 | Goat breed genetic diversity study; no helium drug or PK/PD parameters involved. |
| popPK | Brozović_2014 | irrelevant | 0 | 0 | This is a biomechanics study of dental implants; helium appears only as a helium-neon laser component, with no pharmacokinetic data. |
| popPK | Buckholz_2023 | irrelevant | 0 | 0 | This is a sleep study in cirrhosis with no helium PK data or disposition parameters of any kind. |
| PGx | Butwicka_2014 | not_relevant | 0 | 0 | Paper concerns CYP2D6 effects on antipsychotics (olanzapine, levomepromazine, haloperidol); helium is not mentioned. |
| PGx | Cannarella_2022 | not_relevant | 0 | 0 | Paper describes THRβ mutations in thyroid hormone resistance; helium is not a drug and no PK/PD pharmacogenomic effect is reported. |
| PGx | Cao_2013 | not_relevant | 0 | 0 | Paper concerns BMP8B gene variants and cattle growth traits, with no drug, PK/PD parameters, or helium involved. |
| popPK | Cardon-Dunbar_2017 | irrelevant | 0 | 0 | This is a pramipexole overdose case report; helium is not the subject drug and no helium PK parameters appear. |
| PGx | Carroll_2003 | not_relevant | 0 | 0 | Paper concerns ALL leukemia pharmacogenomics (TPMT, 6-mercaptopurine); helium is not discussed. |
| popPK | Chilengi_2019 | irrelevant | 0 | 0 | This is a child growth velocity study with no pharmacokinetic data or helium involvement whatsoever. |
| popPK | Christesen_2002 | irrelevant | 0 | 0 | Study of a glucokinase mutation and insulin secretion; no helium pharmacokinetic parameters reported. |
| PGx | Corso_2018 | not_relevant | 0 | 0 | Pediatric knee injury case report with no pharmacogenomic or PK/PD content regarding helium. |
| popPK | Cottee_1995 | irrelevant | 0 | 0 | This is a hospital performance comparison study in geriatric medicine with no pharmacokinetic data on helium or any drug. |
| popPK | Cox_2018 | irrelevant | 0 | 0 | This is a study of EHR usage time in surgical residents, with no pharmacokinetic data for helium or any drug. |
| popPK | Crick_2013 | irrelevant | 0 | 0 | This is a historical note about an allostery manuscript, with no pharmacokinetic data for helium. |
| popPK | Dellacà_2001 | irrelevant | 0 | 0 | Helium dilution is only used as a lung-volume measurement technique; no pharmacokinetic parameters for helium are reported. |
| PGx | Demir_2026 | not_relevant | 0 | 0 | Sheep genomics/selection study; no drug, helium, or PK/PD parameters involved. |
| popPK | Deshpande_2018 | irrelevant | 0 | 0 | This is a benzylpenicillin/avibactam tuberculosis study; helium is not the subject drug and no helium PK parameters appear. |
| PGx | Di_2014 | not_relevant | 0 | 0 | The paper concerns warfarin pharmacogenetics (CYP2C9*3, VKORC1) and WRN, not helium; no pharmacogenomic effect on a PK/PD parameter of helium is reported. |
| popPK | Dodson_1985 | irrelevant | 0 | 0 | Helium is only a hyperbaric pressure condition, not a drug with PK parameters; no disposition values for helium are reported. |
| popPK | Doolette_2003 | irrelevant | 3 | 2 | A compartmental inert-gas kinetic model of helium in the human inner ear, but no numeric PK parameter values are provided in the evidence. |
| PGx | Dougherty_2016 | not_relevant | 0 | 0 | The paper is a case report of Niemann-Pick type C genetics; helium is not studied and no pharmacogenomic PK/PD effects are reported. |
| PGx | Drysdale_2016 | not_relevant | 0 | 0 | Helium is only a tracer gas for lung volume measurement; no drug PK/PD or pharmacogenomic effect is reported. |
| PGx | Feussner_1992 | not_relevant | 0 | 0 | Paper concerns apolipoprotein E variant effects on lipid disorder treatment response, not a pharmacogenomic effect on PK/PD parameters of helium. |
| PGx | Finkelstein_2016 | not_relevant | 0 | 0 | Paper concerns PGx effects on various drugs in polypharmacy cases; helium is not mentioned. |
| popPK | Fonade_2001 | irrelevant | 0 | 0 | This is an engineering study of oxygen transfer in hydro-ejector aeration systems; helium is not a subject drug and no pharmacokinetic parameters appear. |
| popPK | Fujii_2015 | irrelevant | 0 | 0 | This is a statistical methods paper on isotonic regression for genotoxicity qHTS screening; no pharmacokinetic parameters for helium or any drug are reported. |
| popPK | Fujita_2018 | irrelevant | 0 | 0 | The paper reports toxicokinetics of the synthetic cathinone α-PHP, not helium; no helium parameters are present. |
| popPK | Fukuchi_1980 | irrelevant | 0 | 0 | Helium is used only as an inert washout tracer for lung ventilation mechanics; no PK disposition parameters for helium are reported. |
| popPK | Gao_2015 | irrelevant | 0 | 0 | Study of antioxidant combinations (vitamin C, tea polyphenols, proanthocyanidins) on metabolic syndrome; no helium PK data at all. |
| popPK | Gebashe_2020 | irrelevant | 0 | 0 | Phytochemical/antioxidant study of medicinal grasses; no helium PK data at all. |
| PGx | Gibbs_2020 | not_relevant | 0 | 0 | Commentary on the Human Genome Project; no pharmacogenomic effects on helium PK/PD parameters reported. |
| PGx | Gilbar_2001 | not_relevant | 0 | 0 | Drug-drug interaction (phenytoin-fluorouracil) via CYP2C9 inhibition; no gene variant/genotype effect on helium PK/PD reported. |
| popPK | Glatstein_2022 | irrelevant | 0 | 0 | This is a clinical case series of antivenom for snake envenomation in children with no pharmacokinetic parameters for helium or any disposition model. |
| popPK | Gouin_2025 | irrelevant | 0 | 0 | Survey of diving practices and symptoms; no pharmacokinetic parameters for helium are reported. |
| popPK | Goutelle_2021 | irrelevant | 0 | 0 | This is a cefepime PK case report; helium is not the subject drug and no helium parameters appear. |
| popPK | Grémain_2021 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters (half-life, clearance) for caffeine, not helium; helium is not mentioned at all. |
| PGx | Hachulla_1991 | not_relevant | 0 | 0 | Paper discusses lipoprotein(a) genetics and atherosclerosis, not helium PK/PD. |
| popPK | Hamilton_2023 | irrelevant | 0 | 0 | This is a review of labor progress curves in obstetrics with no pharmacokinetic data for helium or any drug. |
| PGx | Hattori_2018 | not_relevant | 0 | 0 | Paper studies Tdo2 knockout mouse behavior; helium is not a drug studied and no PK/PD pharmacogenomic effects are reported. |
| popPK | Henderson_2015 | irrelevant | 0 | 0 | Helium is only a ventilating gas mixture component in a respiratory mechanics study; no PK disposition parameters for helium are reported. |
| popPK | Hermans_2002 | irrelevant | 0 | 0 | The paper reports PK of porcine factor VIII, not helium; no helium parameters are present. |
| popPK | Hillmann_2008 | irrelevant | 0 | 0 | In-vitro study of ammonium effects on calcium signaling in cell lines; no helium PK parameters reported. |
| popPK | Hirose_1999 | irrelevant | 0 | 0 | The paper reports PK parameters for glufosinate, not helium; helium is not the subject drug. |
| popPK | Holtorf_1989 | irrelevant | 0 | 0 | No helium or pharmacokinetic parameters at all; this is an in vitro bovine granulosa cell study of oxytocin regulation. |
| PGx | Horiuchi_2015 | not_relevant | 0 | 0 | The paper is a collection of environmental health abstracts; helium is not mentioned and no pharmacogenomic PK/PD effects are reported. |
| popPK | Hughes_2021 | irrelevant | 0 | 0 | This is a life-course epidemiology methods paper on children's weight trajectories; no pharmacokinetic data or helium parameters appear. |
| popPK | INGHAM_1949 | irrelevant | 0 | 0 | This is a psychology paper on neurotic superiority/inferiority feelings with no pharmacokinetic data on helium. |
| popPK | Ikeda_2025 | irrelevant | 0 | 0 | This is a histopathology study of eosinophil counting/staining in EGIDs with no pharmacokinetic parameters for helium or any drug. |
| popPK | Ishii_2015 | irrelevant | 0 | 0 | Helium-3 is only an imaging gas/probe; no pharmacokinetic disposition parameters for helium are reported. |
| PGx | Janney_2005 | not_relevant | 0 | 0 | Paper reports a capecitabine-warfarin drug interaction, not a pharmacogenomic effect on helium PK/PD. |
| popPK | Jelliffe_2022 | irrelevant | 0 | 0 | A commentary on precision dosing education with no helium PK data or parameters. |
| PGx | Junien_2005 | not_relevant | 0 | 0 | Review on epigenetics of metabolic syndrome; no helium or PK/PD pharmacogenomic data. |
| PGx | Kelly_2002 | not_relevant | 0 | 0 | Case report of a drug interaction (ritonavir/indinavir–risperidone) with hypothesized CYP inhibition; no gene variant/genotype effect on PK/PD parameters, and helium is not involved. |
| popPK | Keumoe_2021 | irrelevant | 0 | 0 | This is an in-vitro antiplasmodial natural products study of plant extracts; no pharmacokinetic parameters for helium are reported. |
| popPK | Khazaeli_1990 | irrelevant | 0 | 0 | The paper concerns the monoclonal antibody HA-1A, not helium; no helium PK parameters are present. |
| popPK | Kohriyama_1990 | irrelevant | 0 | 0 | This is a case report of Sumithion (fenitrothion) intoxication, not a pharmacokinetic study of helium; no helium data present. |
| popPK | Kopman_2010 | irrelevant | 0 | 0 | This is a potency (ED50/ED95) analysis of neuromuscular blockers, not a pharmacokinetic study of helium; no helium PK parameters appear. |
| PGx | Kubota_1992 | not_relevant | 0 | 0 | Paper concerns 18F-GlcNFAc tumor uptake in mice; no gene variant effects on PK/PD of helium. |
| PGx | Laberge_1997 | not_relevant | 0 | 0 | Case report of a clarithromycin–digoxin drug interaction; no pharmacogenomic variant effect on helium PK/PD is reported. |
| popPK | Lameh_1992 | irrelevant | 0 | 0 | In vitro receptor pharmacology study of opioids and alpha-2 agonists in neuroblastoma cells; no helium or PK parameters. |
| popPK | Lancaster_2025 | irrelevant | 0 | 0 | A psychology case report on emetophobia treatment with no pharmacokinetic data or helium parameters. |
| PGx | Lash_2020 | not_relevant | 0 | 0 | Paper concerns warfarin/milk thistle interaction, not helium; no pharmacogenomic PK/PD effect on helium reported. |
| popPK | Laskin_1982 | irrelevant | 0 | 0 | The paper reports PK of acyclovir, not helium; no helium parameters are present. |
| popPK | Lavrinenko_2025 | irrelevant | 0 | 0 | Historical review of hemoglobin oxygenation equation; no helium PK parameters reported. |
| PGx | Levêque_2009 | not_relevant | 0 | 0 | Case report of a drug-drug interaction (ritonavir/lopinavir–vincristine) with no gene variant, genotype, or phenotype effect on helium PK/PD. |
| popPK | Li_2017 | irrelevant | 0 | 0 | This is a QSAR study of diterpenoid alkaloid anti-inflammatory activity, not a pharmacokinetic study of helium; no helium PK parameters exist. |
| popPK | Lillo_1985 | irrelevant | 1 | 1 | Decompression sickness study in rats; helium is an inert gas in dive mixtures, not a drug with PK disposition parameters reported. |
| popPK | Lillo_1988 | irrelevant | 2 | 2 | Decompression outcome study in rats; gas uptake rates are described qualitatively with no numeric PK parameters (CL, V, half-life) for helium present. |
| popPK | Linkous_1998 | irrelevant | 0 | 0 | A review of wrist arthrography technique with no pharmacokinetic parameters for helium or any drug. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | Paper concerns OPTN/FABP3 in osteoporosis; no helium drug or pharmacogenomic PK/PD data. |
| PGx | Ma_2020 | not_relevant | 0 | 0 | Paper studies Slco1b2 knockout rats and pitavastatin PK; helium is not mentioned at all. |
| PGx | Mangupli_2017 | not_relevant | 0 | 0 | Case report of SLCO2A1 mutation causing PHOA; no helium PK/PD data or pharmacogenomic effects reported. |
| PGx | Matsuo_1994 | not_relevant | 0 | 0 | Paper concerns apolipoprotein/vitamin E deficiency; no helium or pharmacogenomic PK/PD effects reported. |
| PGx | Mazer-Amirshahi_2019 | not_relevant | 0 | 0 | The paper concerns aripiprazole, not helium; no pharmacogenomic effect on a helium PK/PD parameter is reported. |
| popPK | McGibbon_2005 | irrelevant | 0 | 0 | This is a human balance/stepping stability study with no pharmacokinetic data or helium involvement whatsoever. |
| PGx | Murphy_2003 | not_relevant | 0 | 0 | Case report of a diazepam–phenytoin drug interaction; no gene variant/genotype effect on helium or any pharmacogenomic PK/PD parameter. |
| popPK | Mégarbane_2007 | irrelevant | 0 | 0 | This is a methadone toxicokinetics case report; helium is not the subject drug and no helium parameters appear. |
| PGx | Nakajima_2022 | not_relevant | 0 | 0 | The paper concerns JAG1 mutation and atorvastatin/fenofibrate therapy in Alagille syndrome; helium is not studied, so no pharmacogenomic effect on helium PK/PD is reported. |
| PGx | Nandam_2021 | not_relevant | 0 | 0 | Paper is a TIO case report about FGF23 and phosphate metabolism; no helium drug or pharmacogenomic PK/PD effect is involved. |
| popPK | Noda_2012 | irrelevant | 0 | 0 | This is a pharmacokinetic case report of sunitinib (and its metabolite SU12662) in a hemodialyzed patient; helium is not mentioned at all. |
| popPK | Obata_2018 | irrelevant | 0 | 0 | This is a cardiac mechanoenergetics methods paper in rats; no helium PK parameters or numeric disposition values are reported. |
| popPK | Okamoto_1996 | irrelevant | 0 | 0 | In vitro HIV antiviral study of MKC-442/nevirapine/loviride with no helium PK parameters. |
| PGx | Olafuyi_2021 | not_relevant | 0 | 0 | Review of inter-ethnic PK differences for various drugs; no pharmacogenomic effect on helium PK/PD parameters reported. |
| PGx | Peng_2020 | not_relevant | 0 | 0 | The paper concerns fibrinogen and F11 gene mutations affecting coagulation, not any pharmacogenomic effect on PK/PD parameters of helium. |
| popPK | Perez-Meseguer_2016 | irrelevant | 0 | 0 | In vitro antioxidant/hepatoprotective study of Hamelia patens plant extracts; no helium PK data. |
| popPK | Piccinini_2016 | irrelevant | 0 | 0 | This is an insulin/C-peptide kinetic model in humans; helium is not the subject drug and no numeric parameters are present. |
| popPK | Polver_2021 | irrelevant | 0 | 0 | This is an epidemiological compartmental model of COVID-19 spread, not a pharmacokinetic study of helium; no PK parameters are reported. |
| PGx | Pui_2004 | not_relevant | 0 | 0 | Paper discusses leukemia treatment and pharmacogenetics generally, with no gene variant effect on helium PK/PD parameters. |
| PGx | Reinhold_2009 | not_relevant | 0 | 0 | No pharmacogenomic effect on helium PK/PD; paper concerns methadone/voriconazole interaction. |
| popPK | Rodríguez-Hernández_2015 | irrelevant | 0 | 0 | This is a medicinal chemistry/cytotoxicity study of hederagenin derivatives with no pharmacokinetic parameters for helium or any drug disposition data. |
| PGx | Sarkissian_2022 | not_relevant | 0 | 0 | Biographical sketch about Charles Scriver; no pharmacogenomic PK/PD data for helium. |
| PGx | Schousboe_2015 | not_relevant | 0 | 0 | Paper concerns Pvmdr1 mutations and chloroquine resistance in P. vivax; no helium PK/PD data. |
| PGx | Schuh_2021 | not_relevant | 0 | 0 | Abstract only describes a PGx polypharmacy case of anticholinergic toxicity; no gene variant effect on any PK/PD parameter of helium is reported. |
| popPK | Severinghaus_2002 | irrelevant | 0 | 0 | Historical account of blood gas analyzer development with no helium PK parameters or numeric disposition values. |
| popPK | Sharpee_2016 | irrelevant | 0 | 0 | This is a computational neuroscience conference abstract collection with no pharmacokinetic data or helium disposition parameters. |
| popPK | Shelton_1993 | irrelevant | 0 | 0 | Helium is only used as a pressurizing gas in an electrophysiology study; no PK parameters for helium are reported. |
| PGx | Shi_2021 | not_relevant | 0 | 0 | Paper concerns BPA/NP toxicity in rats; helium is not studied and no pharmacogenomic PK/PD effect is reported. |
| popPK | Shin_2004 | irrelevant | 0 | 0 | Heliox is only a diagnostic/probe gas for NO exchange dynamics; no PK disposition parameters for helium itself are reported. |
| popPK | Siegers_2018 | irrelevant | 0 | 0 | Study of diet-induced fat accumulation in ponies; no helium or any PK parameters present. |
| popPK | Sikand_1976 | irrelevant | 2 | 2 | Helium is only a diagnostic test gas in a lung-mixing physiology study; no PK disposition parameters (CL, V, half-life) for helium are reported, and any model values are not numerically present. |
| PGx | Simooya_1993 | not_relevant | 3 | 5 | Phenotype-metabolic ratio associations for debrisoquine/metoprolol only; no gene variant effect on helium PK/PD (helium not studied). |
| PGx | Skrinskaia_1994 | not_relevant | 2 | 3 | Drug is deprenyl, not helium; genotype-dependent behavioral effects reported but no PK/PD parameter effect sizes. |
| PGx | Skrinskaya_1992 | not_relevant | 0 | 0 | Paper concerns dopamine metabolism and dopaminergic drug responses in mice; helium is not studied. |
| PGx | Skryabin_2021 | not_relevant | 3 | 4 | Case report links CYP2D6*4/*4 PM status to olanzapine rhabdomyolysis (CK elevation) but reports no PK/PD parameter measurement or fitted effect size. |
| popPK | Song_2022 | irrelevant | 0 | 0 | This is an enzymatic synthesis and receptor-binding study of hydroxyequol derivatives; no pharmacokinetic disposition parameters for any drug, let alone helium, are reported. |
| PGx | Szuch_2018 | not_relevant | 0 | 0 | Case report of intermittent MSUD (BCKDHB variants); no drug PK/PD parameters or pharmacogenomic effects reported. |
| PGx | Takeuchi_2017 | not_relevant | 0 | 0 | Case report of a drug–drug interaction (clarithromycin–CYP3A4 inhibition) with no gene variant, genotype, or pharmacogenomic effect on helium or any PK/PD parameter. |
| PGx | Tanwir_2022 | not_relevant | 0 | 0 | Case report of CBD–tiagabine pharmacokinetic interaction; no gene variant/genotype/phenotype effect on helium (not even a drug) PK/PD is reported. |
| popPK | Ter_2025 | irrelevant | 0 | 0 | This is a population PK simulation study of lazertinib, not helium; no helium disposition parameters are present. |
| popPK | Tikuisis_1990 | irrelevant | 3 | 2 | This is a decompression bubble-incidence modeling study, not a PK disposition study; helium kinetics parameters are model-fitted for bubble risk and no numeric parameter values appear in the evidence. |
| popPK | Tiwari_2023 | irrelevant | 0 | 0 | Study of benzoic acid toxicity in microalgae; no helium PK parameters. |
| popPK | Tsuchiya_2020 | irrelevant | 0 | 0 | This is a safety study of hyperpolarized 3He MRI in pediatric asthma; no pharmacokinetic disposition parameters (CL, V, half-life, compartmental model) for helium are reported. |
| PGx | Tümer_2017 | not_relevant | 0 | 0 | The paper concerns ATP7A variants and copper-histidine treatment in Menkes disease; helium is not a drug and no PK/PD parameters for helium are reported. |
| popPK | Urakami_2014 | irrelevant | 0 | 0 | This is a PK/PD case report of antibiotics (ampicillin, piperacillin, gentamicin), not helium. |
| popPK | Vaghefi_2016 | irrelevant | 0 | 0 | This is a fungal plant-pathogen study about azoxystrobin resistance in Cercospora beticola, with no pharmacokinetic data for helium. |
| popPK | Varani_1999 | irrelevant | 0 | 0 | This is a receptor pharmacology study of caffeine in human platelets with no helium PK parameters. |
| PGx | Vieira_2020 | not_relevant | 0 | 0 | Paper concerns MTHFR deficiency and betaine, with no pharmacogenomic effect on PK/PD parameters of helium. |
| PGx | Villamil-Osorio_2021 | not_relevant | 0 | 0 | Case report of NKX2-1 deletion causing brain-lung-thyroid syndrome; no drug (helium) PK/PD pharmacogenomic effects reported. |
| PGx | Wagner_1987 | not_relevant | 0 | 0 | Paper concerns metoprolol/diltiazem/propafenone/sparteine CYP2D6 poor metabolizer phenotype; helium is not studied. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | This is an antiviral pharmacodynamic study of steroidal pyridine compounds in vitro and in mice, with no pharmacokinetic parameters for helium or any disposition model reported. |
| PGx | Wautier_1993 | not_relevant | 0 | 0 | Paper concerns platelet alloantigens and transfusion, not helium or any PK/PD pharmacogenomic effect. |
| popPK | Wen_2021 | irrelevant | 0 | 0 | This is an antiviral drug screening study for cardamomin against adenovirus, with no pharmacokinetic parameters for helium. |
| popPK | Whitlock_2017 | irrelevant | 0 | 0 | This is a cohort study of pain and cognitive decline with no pharmacokinetic data for helium or any drug. |
| popPK | Wolpers_1984 | irrelevant | 3 | 2 | Helium is used only as an inert tracer/dilution indicator to estimate myocardial blood flow, not as a subject drug with disposition parameters; no numeric PK values for helium are given. |
| PGx | Yang_2014 | not_relevant | 0 | 0 | Reports SJS risk association with genetic variants, not any PK/PD parameter change for helium. |
| PGx | Ye_2016 | not_relevant | 0 | 0 | Study reports herbal (lotus leaf alkaloid) inhibition of CYP2D6 affecting dextromethorphan/metoprolol PK, not a gene variant effect on helium; helium not involved. |
| PGx | Zammarchi_1994 | not_relevant | 1 | 1 | Speculative mention of interindividual variation in dextromethorphan metabolism affecting response; no gene variant or PK/PD parameter quantified, and helium is not involved. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | This is a PK study of KN015 (an FSH-Fc fusion protein), not of helium; no helium disposition parameters are reported. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | Paper concerns UGT1A1 genotype and bilirubin in Gilbert syndrome with antiepileptics; helium is not mentioned at all. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
