<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;maraviroc&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Maraviroc_Courlet2021_reference&quot;,&quot;label&quot;:&quot;Courlet_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maraviroc/Maraviroc_Courlet2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maraviroc_Ren2022_reference&quot;,&quot;label&quot;:&quot;Ren_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maraviroc/Maraviroc_Ren2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# maraviroc

- **generic name:** maraviroc
- **ATC codes:** `J05AX09`
- **DrugBank:** [DB04835](https://go.drugbank.com/drugs/DB04835) · **PubChem:** [CID 3002977](https://pubchem.ncbi.nlm.nih.gov/compound/3002977)
- **molar mass:** 513.6655 g/mol (C29H41F2N5O) — DrugBank
- **groups:** approved, investigational

## About

Maraviroc is an antiviral drug used to treat HIV infection and AIDS. It is authorised in the European Union for HIV infections and remains in use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421369](https://www.wikidata.org/wiki/Q421369) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| maraviroc | parent | 513.665 | C29H41F2N5O | DrugBank | [3002977](https://pubchem.ncbi.nlm.nih.gov/compound/3002977) | Chan_2008, Chan_2011, Weatherley_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:07 | 10:10 | 2/2/3 | 6/0/2 | 0/0/1 | 567,660/33,154 | ollama / glm-5.3-flash | 32 | 2/24 | 31/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Courlet_2021_reference](drugs/drug_maraviroc/Maraviroc_Courlet2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Courlet P et al., Population pharmacokinetic modelling to…, European journal of clinica… (2021) | [10.1007/s00228-020-03060-2](https://doi.org/10.1007/s00228-020-03060-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ren_2022_reference](drugs/drug_maraviroc/Maraviroc_Ren2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ren T et al., Pharmacodynamic model of slow reversibl…, Journal of pharmacokinetics… (2022) | [10.1007/s10928-022-09822-y](https://doi.org/10.1007/s10928-022-09822-y) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Chan_2011_pk_alone_pk_estimation_step_of_the_two_stage_approach](drugs/drug_maraviroc/Maraviroc_Chan2011_pk_alone_pk_estimation_step_of_the_two_st.md) | — | 2-compartment (no model) | 7 (+2 cov.) | Chan PL et al., The use of the SAEM algorithm in MONOLI…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-010-9175-z](https://doi.org/10.1007/s10928-010-9175-z) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Chan_2011_simultaneous_pkpd](drugs/drug_maraviroc/Maraviroc_Chan2011_simultaneous_pkpd.md) | — | 2-compartment (no model) | 7 (+2 cov.) | Chan PL et al., The use of the SAEM algorithm in MONOLI…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-010-9175-z](https://doi.org/10.1007/s10928-010-9175-z) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Weatherley_2009_reference](drugs/drug_maraviroc/Maraviroc_Weatherley2009_reference.md) | — | 1-compartment (no model) | 4 | Weatherley B et al., Maraviroc modelling strategy: use of ea…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2009.03455.x](https://doi.org/10.1111/j.1365-2125.2009.03455.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Chan_2008_reference](drugs/drug_maraviroc/Maraviroc_Chan2008_reference.md) | — | 1-compartment (no model) | 7 | Chan PL et al., A population pharmacokinetic meta-analy…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03139.x](https://doi.org/10.1111/j.1365-2125.2008.03139.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Fan_2025_reference](drugs/drug_maraviroc/Maraviroc_Fan2025_reference.md) | — | 2-compartment (no model) | 5 | Fan X et al., Pharmacokinetic-pharmacodynamic modelin…, Microbiology spectrum (2025) | [10.1128/spectrum.00805-25](https://doi.org/10.1128/spectrum.00805-25) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2011_viral_load](drugs/drug_maraviroc/pd_Chan_2011_viral_load.md) | HIV-1 RNA viral load ← maraviroc · direct Emax (saturable) effect | — | Chan PL et al., The use of the SAEM algorithm in MONOLI…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-010-9175-z](https://doi.org/10.1007/s10928-010-9175-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Fang_2012_HIV_RNA](drugs/drug_maraviroc/pd_Fang_2012_HIV_RNA.md) | HIV-1 RNA ← maraviroc · delayed effect through transit (transduction) compartments | — | Fang J et al., From in vitro EC₅₀ to in vivo dose-resp…, Journal of pharmacokinetics… (2012) | [10.1007/s10928-012-9255-3](https://doi.org/10.1007/s10928-012-9255-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Risner_2020_SARS_CoV_2_viral_titer_and_S_protein_mediated_cell_fusion_multinucleate_cell_formation](drugs/drug_maraviroc/pd_Risner_2020_SARS_CoV_2_viral_titer_and_S_protein_mediated_ce.md) | SARS-CoV-2 viral titer and S-protein mediated cell fusion (multinucleate cell formation) ← maraviroc · direct sigmoid Emax (Hill) effect | — | Risner KH et al., Maraviroc inhibits SARS-CoV-2 multiplic… (2020) | [10.1101/2020.08.12.246389](https://doi.org/10.1101/2020.08.12.246389) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rosario_2005_viral_load](drugs/drug_maraviroc/pd_Rosario_2005_viral_load.md) | plasma HIV viral load ← maraviroc · disease-progression model | — | Rosario MC et al., A pharmacokinetic-pharmacodynamic disea…, Clinical pharmacology and t… (2005) | [10.1016/j.clpt.2005.07.010](https://doi.org/10.1016/j.clpt.2005.07.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rosario_2006_HIV_1_RNA](drugs/drug_maraviroc/pd_Rosario_2006_HIV_1_RNA.md) | plasma HIV-1 RNA ← maraviroc · inhibition effect | — | Rosario MC et al., A pharmacokinetic-pharmacodynamic model…, Journal of acquired immune… (2006) | [10.1097/01.qai.0000220021.64115.37](https://doi.org/10.1097/01.qai.0000220021.64115.37) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rosario_2008_RO](drugs/drug_maraviroc/pd_Rosario_2008_RO.md) | CCR5 receptor occupancy ← maraviroc · direct Emax (saturable) effect | — | Rosario MC et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03140.x](https://doi.org/10.1111/j.1365-2125.2008.03140.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Davis_2008_QT](drugs/drug_maraviroc/pd_Davis_2008_QT.md) | QT interval ← maraviroc · direct linear effect | model (no simulator) | Davis JD et al., Effect of single doses of maraviroc on…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03138.x](https://doi.org/10.1111/j.1365-2125.2008.03138.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Jacqmin_2013_VL_50_copies_ml](drugs/drug_maraviroc/pd_Jacqmin_2013_VL_50_copies_ml.md) | Probability of treatment success (viral RNA &lt;50 copies/ml) ← maraviroc · categorical (graded) response model | — | Jacqmin P et al., Assessment of Maraviroc Exposure-Respon…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.42](https://doi.org/10.1038/psp.2013.42) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A5** | `Q305` · kfm | metabolism | [Vourvahis_2019](drugs/drug_maraviroc/pgx_Vourvahis_2019_CYP3A5_Q305.md) | Vourvahis M et al., No Clinical Impact of CYP3A5 Gene Polym…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1306](https://doi.org/10.1002/jcph.1306) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=maraviroc) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` metabolism | paper PGx gene |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` metabolism | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` metabolism | DrugBank actor |

<sub>Actors without a tissue in the table: CCR5 (inhibitor), CCR5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 226 matched, 141 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 7  ·  extracted 2  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chan_2008.pdf` | Chan PL et al., A population pharmacokinetic meta-analy…, British journal of clinical… (2008) | popPK | 10 | [10.1111/j.1365-2125.2008.03139.x](https://doi.org/10.1111/j.1365-2125.2008.03139.x) | [18333869](https://pubmed.ncbi.nlm.nih.gov/18333869) | Population PK model for maraviroc with CL, Vc, Vp values reported in the abstract; ka and other detailed parameters may be in tables/supplements not shown. |
| `Liyanage_2022.pdf` | Liyanage M et al., Maraviroc Population Pharmacokinetics W…, The Pediatric infectious di… (2022) | popPK | 10 | [10.1097/INF.0000000000003665](https://doi.org/10.1097/INF.0000000000003665) | [35980827](https://pubmed.ncbi.nlm.nih.gov/35980827) | Population PK model of maraviroc in neonates with clearance/volume findings, but specific numeric parameter values (CL, V, estimates) are not shown in the abstract evidence. |
| `Weatherley_2009.pdf` | Weatherley B et al., Maraviroc modelling strategy: use of ea…, British journal of clinical… (2009) | popPK | 10 | [10.1111/j.1365-2125.2009.03455.x](https://doi.org/10.1111/j.1365-2125.2009.03455.x) | [19740392](https://pubmed.ncbi.nlm.nih.gov/19740392) | Population PK model of maraviroc with numeric parameters (CL 48 l/h, four-compartment, bioavailability, hepatic blood flow) present in the abstract. |
| `Rosario_2006.pdf` | Rosario MC et al., A pharmacokinetic-pharmacodynamic model…, Journal of acquired immune… (2006) | popPK | 6 | [10.1097/01.qai.0000220021.64115.37](https://doi.org/10.1097/01.qai.0000220021.64115.37) | [16639345](https://pubmed.ncbi.nlm.nih.gov/16639345) | Population PK-PD mixed-effects modeling of maraviroc in HIV patients, but no numeric PK disposition parameters (CL, V, ka) appear in the evidence; values likely in figures/supplements not provided. |
| `Rosario_2005.pdf` | Rosario MC et al., A pharmacokinetic-pharmacodynamic disea…, Clinical pharmacology and t… (2005) | popPK | 5 | [10.1016/j.clpt.2005.07.010](https://doi.org/10.1016/j.clpt.2005.07.010) | [16321617](https://pubmed.ncbi.nlm.nih.gov/16321617) | PK-PD disease model for maraviroc with a PK component from a single-dose volunteer study, but no numeric PK parameter values appear in the evidence. |
| `Rosario_2008.pdf` | Rosario MC et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2008) | popPK | 5 | [10.1111/j.1365-2125.2008.03140.x](https://doi.org/10.1111/j.1365-2125.2008.03140.x) | [18333870](https://pubmed.ncbi.nlm.nih.gov/18333870) | Population PK-PD model of maraviroc in humans, but only the KD (0.0894 ng/ml) is given; PK parameters (CL, V) are not shown and likely reside in supplementary material. |

<sub>queue written 2026-10-07T16:58:52.787714+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdullahi_2026 | irrelevant | 0 | 0 | This is an HIV-1 resistance sequencing study with no maraviroc PK data or parameters of any kind. |
| PGx | Abel_2008 | not_relevant | 0 | 0 | Effects are due to drug-drug interactions (CYP3A4 inducers/inhibitors), not gene variants/genotype/phenotype. |
| PGx | Abel_2008_2 | not_relevant | 0 | 0 | Drug-drug interaction study of maraviroc with no gene variant/genotype/phenotype reported. |
| PGx | Abel_2008_3 | not_relevant | 0 | 0 | Drug-drug interactions with CYP3A4 inhibitors, not gene variant/genotype/phenotype effects on maraviroc PK. |
| PGx | Abel_2009 | not_relevant | 0 | 0 | Abstract covers CYP3A4-mediated drug interactions only; no gene variant/genotype effects on maraviroc PK/PD reported. |
| PGx | Andrews_2010 | not_relevant | 0 | 0 | This is a drug-drug interaction study (maraviroc + raltegravir) with no gene variant/genotype/phenotype effects on PK or PD parameters. |
| popPK | Armand-Ugón_2010 | irrelevant | 0 | 0 | In-vitro virology resistance study with no PK parameters for maraviroc. |
| PGx | Arribas_2008 | not_relevant | 0 | 0 | Review of new antiretrovirals; no pharmacogenomic effect on maraviroc PK/PD parameters reported. |
| popPK | Courlet_2021 | irrelevant | 0 | 0 | This is a population PK study of amlodipine, not maraviroc; maraviroc is not the subject drug and no maraviroc parameters are reported. |
| popPK | Crawford_2010 | irrelevant | 0 | 0 | The paper models vicriviroc, a different CCR5 antagonist; maraviroc is not the subject drug and no maraviroc parameters appear. |
| popPK | Davis_2008 | irrelevant | 3 | 2 | This is a QT/QTc thorough ECG study; maraviroc PK parameters were "determined" but no CL/V/ka values appear in the evidence, only concentration-QT slope. |
| popPK | Dezzutti_2016 | irrelevant | 2 | 2 | This is a PK/PD correlation study of vaginal rings; only drug concentrations and in vitro release rates are reported, no disposition parameters (CL, V, half-life, or population-PK model) for maraviroc. |
| popPK | Duwal_2018 | irrelevant | 0 | 0 | The paper models dolutegravir PK; maraviroc is only mentioned as another PrEP candidate, with no maraviroc parameters reported. |
| PGx | Döring_2016 | not_relevant | 2 | 3 | Paper predicts HIV-2 viral coreceptor usage (tropism) for maraviroc eligibility, not a host gene variant effect on maraviroc PK/PD parameters. |
| PGx | Elgadi_2011 | not_relevant | 0 | 0 | Maraviroc is only mentioned as excluded prior exposure; no pharmacogenomic PK/PD data reported. |
| PGx | Emmelkamp_2007 | not_relevant | 0 | 0 | Review discusses CYP3A4 drug-drug interactions with maraviroc but no gene variant/genotype effects on PK or PD parameters. |
| popPK | Fan_2025 | irrelevant | 0 | 0 | The paper models PK of the anti-CD4 nanobody Nb457-NbHSA-Nb457 (and ibalizumab); maraviroc is only mentioned as a comparator HIV drug, with no maraviroc parameters. |
| popPK | Fang_2012 | relevant | 4 | 2 | Maraviroc is a lead case in a PK-PD viral dynamics model, but the evidence contains only scaling factors (SF 4.35), not maraviroc's disposition parameters, which likely reside in supplementary material not provided. |
| popPK | Fox_2016 | irrelevant | 3 | 3 | Reports exposure metrics (Cmax, AUC ratios) but no disposition parameters (CL, V, half-life, or PK model) for maraviroc. |
| PGx | Fukutake_2015 | not_relevant | 3 | 2 | Mentions genotypic tropism testing for maraviroc use but reports no gene effect on a PK/PD parameter. |
| PGx | Fätkenheuer_2008 | not_relevant | 3 | 2 | CCR5 delta32 genotype is analyzed only as an efficacy subgroup (virologic/CD4 response), not as a modifier of maraviroc PK or a fitted PD parameter. |
| PGx | Gervasini_2010 | not_relevant | 2 | 1 | Maraviroc is only mentioned as an example drug requiring pharmacogenetic testing; no gene-variant effect on its PK/PD parameters is reported. |
| PGx | Giraldo_2010 | not_relevant | 0 | 0 | Review of drug–drug interactions in HIV; no pharmacogenomic effects on maraviroc PK/PD reported. |
| popPK | Heredia_2015 | irrelevant | 0 | 0 | Maraviroc is only a co-administered comparator; no PK parameters or numeric disposition values are reported. |
| PGx | Huličiak_2022 | not_relevant | 0 | 0 | Study tests drug–drug interactions on ABCB1 transport in vitro; no gene variant/genotype effect on maraviroc PK/PD is reported. |
| popPK | Hurwitz_2011 | irrelevant | 0 | 0 | The study is about stavudine, not maraviroc; no maraviroc PK parameters are reported. |
| PGx | Hyland_2008 | not_relevant | 0 | 0 | In vitro CYP3A4 metabolism and DDI simulations; no gene variant/genotype/phenotype effect on maraviroc PK/PD. |
| popPK | Islam_2024 | irrelevant | 0 | 0 | This is a fostemsavir lipid nanoparticle formulation study; maraviroc is only mentioned as a comparator in susceptibility discussion, with no maraviroc PK parameters. |
| popPK | Jacqmin_2013 | irrelevant | 2 | 1 | This is an exposure–response/efficacy analysis of maraviroc in HIV patients; no population-PK disposition parameters (CL, V, ka) are reported, only derived exposure metrics and a cited half-life from another study. |
| PGx | Kakuda_2010 | not_relevant | 0 | 0 | Paper discusses etravirine drug-drug interactions with maraviroc dosing, not any gene variant/genotype effect on PK/PD parameters. |
| popPK | Kang_2012 | irrelevant | 0 | 0 | Maraviroc is only a comparator in an in-vitro potency/mechanism study; no PK parameters reported. |
| PGx | Karageorgopoulos_2014 | not_relevant | 0 | 0 | Paper describes drug-drug interactions with maraviroc, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Ke_2016 | not_relevant | 1 | 1 | Maraviroc appears only as a CYP3A4 DDI victim in an efavirenz PBPK model; no gene variant/genotype effect on maraviroc PK is reported (CYP2B6 genotype mention is for efavirenz clearance variability only). |
| popPK | Latinovic_2014 | irrelevant | 0 | 0 | Mechanistic in-vitro study of FLSC IgG1 binding to CCR5 with maraviroc only as co-administered agent; no PK parameters reported. |
| popPK | Le_2026 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50/IC50) of maraviroc against SARS-CoV-2; no PK disposition parameters (CL, V, half-life, population-PK model) reported. |
| popPK | Liyanage_2022 | relevant | 10 | 4 | Population PK model of maraviroc in neonates with clearance/volume findings, but specific numeric parameter values (CL, V, estimates) are not shown in the abstract evidence. |
| PGx | Llibre_2015 | not_relevant | 2 | 3 | Study reports clinical outcomes (virologic/immunologic response) and tropism testing, but no gene variant effect on maraviroc PK/PD parameters. |
| PGx | Mannu_2011 | not_relevant | 2 | 3 | Computational docking study of CYP3A4 binding; no gene variant/genotype effect on maraviroc PK/PD parameters reported. |
| PGx | McGowan_2019 | not_relevant | 3 | 2 | CCR5 genotype was characterized but no genotype-based effect on MVC PK or PD parameters is reported in the abstract. |
| PGx | Nicol_2014 | not_relevant | 2 | 3 | Reports transporter expression differences across tissues, not genetic variants affecting maraviroc PK/PD parameters. |
| popPK | Nicol_2015 | irrelevant | 2 | 1 | This is an Emax pharmacodynamic efficacy modeling study; no PK disposition parameters (CL, V, half-life) for maraviroc are reported, only tissue concentrations and potency values. |
| PGx | Nozza_2016 | not_relevant | 2 | 3 | The paper compares tropism testing methods (Trofile vs Geno2Pheno) for guiding maraviroc use, not a gene variant effect on maraviroc PK/PD parameters. |
| popPK | Piscitelli_2022 | irrelevant | 0 | 0 | This is a population PK study of dolutegravir, not maraviroc; no maraviroc parameters are reported. |
| popPK | Pressiat_2018 | irrelevant | 2 | 1 | Maraviroc is only a co-administered drug in a darunavir interaction study; no maraviroc PK parameter values are reported. |
| PGx | Rao_2009 | not_relevant | 2 | 2 | Discusses CCR5 delta32 and viral tropism effects on HIV susceptibility/efficacy, not gene effects on maraviroc PK or PD parameters. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | This is a PK/PD tutorial/review on slow reversible binding (candesartan, etc.); maraviroc is not the subject drug and no maraviroc PK parameters appear. |
| PGx | Revell_2018 | not_relevant | 0 | 0 | Paper describes computational models predicting virological response, not gene-variant effects on maraviroc PK/PD parameters. |
| popPK | Risner_2020 | irrelevant | 0 | 0 | In-vitro cell-culture antiviral study with an agent-based simulation of drug effect; no PK disposition parameters (CL, V, ka, half-life) for maraviroc are reported. |
| popPK | Rosario_2005 | relevant | 5 | 2 | PK-PD disease model for maraviroc with a PK component from a single-dose volunteer study, but no numeric PK parameter values appear in the evidence. |
| popPK | Rosario_2006 | relevant | 6 | 2 | Population PK-PD mixed-effects modeling of maraviroc in HIV patients, but no numeric PK disposition parameters (CL, V, ka) appear in the evidence; values likely in figures/supplements not provided. |
| popPK | Rosario_2008 | relevant | 5 | 2 | Population PK-PD model of maraviroc in humans, but only the KD (0.0894 ng/ml) is given; PK parameters (CL, V) are not shown and likely reside in supplementary material. |
| popPK | Russkamp_2015 | irrelevant | 0 | 0 | Maraviroc is only used as a therapeutic CCR5 antagonist in a mouse lung injury model; no PK parameters are reported. |
| PGx | Siccardi_2015 | not_relevant | 3 | 6 | Reports heritability (rGC) of maraviroc PK variability, not an effect of a specific gene variant/genotype on a PK/PD parameter. |
| popPK | Siddik_2018 | irrelevant | 0 | 0 | This is a virology study of HIV-1 tropism and maraviroc drug susceptibility (EC50 in cell culture), with no PK disposition parameters for maraviroc. |
| PGx | Soriano_2008 | not_relevant | 0 | 0 | Review of maraviroc PK and drug interactions with no gene variant/genotype effects on PK/PD parameters reported. |
| popPK | Srinivas_2020 | irrelevant | 3 | 2 | This is a PK/PD PrEP efficacy study in humans reporting tissue concentrations and EC90 values, not disposition parameters (CL, V, half-life) for maraviroc, and no such numeric values appear in the evidence. |
| popPK | Stillemans_2021 | irrelevant | 0 | 0 | This is a population PK study of darunavir; maraviroc appears only as a concomitant antiretroviral in covariate tables, with no maraviroc PK parameters. |
| popPK | Tower_2026 | irrelevant | 0 | 0 | This is a review of viral dynamics parameter estimation methods; maraviroc is not mentioned and no PK parameters for it appear. |
| PGx | Tupova_2019 | not_relevant | 3 | 3 | Studies transporter-mediated transplacental PK via inhibition/perfusion experiments, not gene variant/genotype effects on maraviroc PK/PD parameters. |
| popPK | Vincent_2018 | irrelevant | 2 | 3 | Reports only local tissue/fluid concentrations of maraviroc from an IVR study, with no clearance, volume, half-life, or PK model parameters. |
| popPK | Visseaux_2012 | irrelevant | 0 | 0 | This is an in vitro susceptibility (EC50) study of HIV-2 isolates, not a pharmacokinetic study with disposition parameters for maraviroc. |
| popPK | Visseaux_2015 | irrelevant | 0 | 0 | In vitro antiviral susceptibility study of cenicriviroc vs HIV-2; maraviroc is only a comparator with EC50 values, no PK disposition parameters. |
| PGx | Vourvahis_2012 | not_relevant | 0 | 0 | Reports drug-drug interaction effects of lersivirine on maraviroc PK, not a gene variant/genotype/phenotype effect. |
| PGx | Vourvahis_2013 | not_relevant | 0 | 0 | Study examines renal impairment effects on maraviroc PK, with no gene variant/genotype/phenotype data reported. |
| PGx | Waters_2015 | not_relevant | 0 | 0 | PK changes are due to efavirenz induction (drug-drug interaction), not any gene variant/genotype/phenotype. |
| PGx | Woollard_2015 | not_relevant | 2 | 3 | Review covers MVC PK/PD and resistance mutations, but no gene variant effect on a PK/PD parameter is reported. |
| PGx | Xu_2017 | not_relevant | 2 | 0 | Only mentions CYP3A4 drug interactions affecting MVC PK, no gene variant/genotype effect on PK/PD parameters. |
| popPK | van_2015 | irrelevant | 0 | 0 | This is an immunological clinical trial of maraviroc intensification with no PK parameters (no CL, V, ka, half-life, or PK model) reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:59 UTC</sub>
