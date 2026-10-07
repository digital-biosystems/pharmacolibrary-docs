<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sodium nitrite&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumNitrite_Grimm2023_reference&quot;,&quot;label&quot;:&quot;Grimm_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_nitrite/SodiumNitrite_Grimm2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sodium nitrite

- **generic name:** sodium nitrite
- **ATC codes:** `V03AB08`
- **DrugBank:** [DB09112](https://go.drugbank.com/drugs/DB09112) · **PubChem:** [CID 23668193](https://pubchem.ncbi.nlm.nih.gov/compound/23668193)
- **molar mass:** 47.0134 g/mol (HNO2) — DrugBank
- **groups:** approved, investigational

## About

Sodium nitrite is used as an antidote, mainly for cyanide poisoning. It is an approved medicine and appears on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q339975](https://www.wikidata.org/wiki/Q339975) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nitrate | metabolite | 62.004 | NO3- | PubChem | [943](https://pubchem.ncbi.nlm.nih.gov/compound/943) | Vega-Villa_2013 |
| nitric oxide | metabolite | 30.006 | NO | PubChem | [145068](https://pubchem.ncbi.nlm.nih.gov/compound/145068) | Vega-Villa_2013 |
| nitrite | metabolite | 46.005 | NO2- | PubChem | [946](https://pubchem.ncbi.nlm.nih.gov/compound/946) | Vega-Villa_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:40 | 20:48 | 1/1/0 | 3/3/0 | 0/0/0 | 1,026,380/34,249 | ollama / glm-5.3-flash | 29 | 1/23 | 28/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Grimm_2023_reference](drugs/drug_sodium_nitrite/SodiumNitrite_Grimm2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Grimm HP et al., Delivery of the Brainshuttle™ amyloid-b…, mAbs (2023) | [10.1080/19420862.2023.2261509](https://doi.org/10.1080/19420862.2023.2261509) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Vega-Villa_2013_reference](drugs/drug_sodium_nitrite/SodiumNitrite_VegaVilla2013_reference.md) | — | general linear (no model) | 10 | Vega-Villa K et al., Quantitative Systems Pharmacology Model…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.35](https://doi.org/10.1038/psp.2013.35) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Clària_1994_relaxation_of_aortic_rings_endothelium_independent_response_to_sodium_nitrite](drugs/drug_sodium_nitrite/pd_Cl_ria_1994_relaxation_of_aortic_rings_endothelium_independe.md) | relaxation of aortic rings (endothelium-independent response to sodium nitrite) ← sodium nitrite · direct sigmoid Emax (Hill) effect | — | Clària J et al., Increased nitric oxide-dependent vasore…, Hepatology (Baltimore, Md.) (1994) | [10.1002/hep.1840200635](https://doi.org/10.1002/hep.1840200635) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ohshima_1984_NPRO](drugs/drug_sodium_nitrite/pd_Ohshima_1984_NPRO.md) | N-nitrosoproline excreted in 24-h urine (NPRO formed in vivo) ← sodium nitrite · direct log-linear effect | — | Ohshima H et al., Monitoring endogenous nitrosamine forma…, IARC scientific publication… (1984) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vega-Villa_2013_MetHb](drugs/drug_sodium_nitrite/pd_Vega_Villa_2013_MetHb.md) | methemoglobin biomarker turnover ← nitrite | — | Vega-Villa K et al., Quantitative Systems Pharmacology Model…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.35](https://doi.org/10.1038/psp.2013.35) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ding_2015_IC50](drugs/drug_sodium_nitrite/pd_Ding_2015_IC50.md) | luminescent bacteria inhibition (50% inhibitory concentration) ← sodium nitrite · direct sigmoid Emax (Hill) effect | — | Ding S et al., Acute toxicity assessment of ANAMMOX su…, Chemosphere (2015) | [10.1016/j.chemosphere.2015.03.057](https://doi.org/10.1016/j.chemosphere.2015.03.057) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Shelkovnikov_2004_relaxing_effect_of_sodium_nitrite_after_precontraction_by_norepinephrine_1_microM_in_rat_denuded_thoracic_aorta](drugs/drug_sodium_nitrite/pd_Shelkovnikov_2004_relaxing_effect_of_sodium_nitrite_after_pr.md) | relaxing effect of sodium nitrite after precontraction by norepinephrine (1 microM) in rat denuded thoracic aorta ← sodium nitrite · direct Emax (saturable) effect | — | Shelkovnikov S et al., Influence of nitric oxide donors and pe…, Life sciences (2004) | [10.1016/j.lfs.2003.11.006](https://doi.org/10.1016/j.lfs.2003.11.006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wanstall_1994_relaxation_of_norepinephrine_contracted_rat_pulmonary_artery_rings](drugs/drug_sodium_nitrite/pd_Wanstall_1994_relaxation_of_norepinephrine_contracted_rat_pu.md) | relaxation of norepinephrine-contracted rat pulmonary artery rings ← sodium nitrite · direct sigmoid Emax (Hill) effect | — | Wanstall JC, In vitro hypoxia attenuates vasorelaxat…, The Journal of pharmacology… (1994) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_nitrite) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HBA1 (oxidizer), HBB (oxidizer), MB (oxidizer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 141 matched, 81 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gebremedhin_1987.pdf` | Gebremedhin D et al., Inhibition by quinine of endothelium-de…, British journal of pharmaco… (1987) | pd | 5 | [10.1111/j.1476-5381.1987.tb11388.x](https://doi.org/10.1111/j.1476-5381.1987.tb11388.x) | [2827827](https://www.ncbi.nlm.nih.gov/pubmed/2827827) | metadata signals extractable PD data (EC50) |
| `Buikema_1993.pdf` | Buikema H et al., Endothelium dependent relaxation in two…, Cardiovascular research (1993) | pd | 4 | [10.1093/cvr/27.12.2118](https://doi.org/10.1093/cvr/27.12.2118) | [8313417](https://www.ncbi.nlm.nih.gov/pubmed/8313417) | metadata signals extractable PD data (Emax) |
| `Leavesley_2008.pdf` | Leavesley HB et al., Interaction of cyanide and nitric oxide…, Toxicological sciences : an… (2008) | pd | 4 | [10.1093/toxsci/kfm254](https://doi.org/10.1093/toxsci/kfm254) | [17906319](https://www.ncbi.nlm.nih.gov/pubmed/17906319) | metadata signals extractable PD data (IC50) |
| `Sellimi_2017.pdf` | Sellimi S et al., Enhancing colour and oxidative stabilit…, Food and chemical toxicolog… (2017) | pd | 4 | [10.1016/j.fct.2017.04.001](https://doi.org/10.1016/j.fct.2017.04.001) | [28389351](https://www.ncbi.nlm.nih.gov/pubmed/28389351) | metadata signals extractable PD data (EC50) |
| `Thorens_1979.pdf` | Thorens S et al., Effects of some vasodilators on calcium…, European journal of pharmac… (1979) | pd | 4 | [10.1016/0014-2999(79)90410-2](https://doi.org/10.1016/0014-2999(79)90410-2) | [421744](https://www.ncbi.nlm.nih.gov/pubmed/421744) | metadata signals extractable PD data (IC50) |
| `Vidrio_1998.pdf` | Vidrio H et al., Potentiation by isoniazid of relaxation…, Journal of cardiovascular p… (1998) | pd | 4 | [10.1097/00005344-199809000-00007](https://doi.org/10.1097/00005344-199809000-00007) | [9733350](https://www.ncbi.nlm.nih.gov/pubmed/9733350) | metadata signals extractable PD data (EC50) |
| `Wanstall_1992.pdf` | Wanstall JC et al., Responses to vasodilator drugs on pulmo…, British journal of pharmaco… (1992) | pd | 4 | [10.1111/j.1476-5381.1992.tb14227.x](https://doi.org/10.1111/j.1476-5381.1992.tb14227.x) | [1596677](https://www.ncbi.nlm.nih.gov/pubmed/1596677) | metadata signals extractable PD data (EC50) |
| `Wanstall_1994.pdf` | Wanstall JC, In vitro hypoxia attenuates vasorelaxat…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [7965804](https://www.ncbi.nlm.nih.gov/pubmed/7965804) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T19:27:54.765310+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akarid_1995 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on PK/PD parameters of sodium nitrite are reported; sodium nitrite is only a control compound in an antiviral efficacy study. |
| PGx | Baek_2010 | not_relevant | 0 | 0 | Case report of exchange transfusion for nitroprusside-induced cyanide poisoning; no gene variant/genotype or pharmacogenomic effect on PK/PD parameters reported. |
| popPK | Baek_2024 | irrelevant | 0 | 0 | This is a PK/PD study of LNP-mRNA therapeutics (mRNA-3927/3705/3210), not sodium nitrite; no sodium nitrite parameters appear. |
| popPK | Barua_2026 | irrelevant | 0 | 0 | This is a review of AI/ML toxicity prediction tools; sodium nitrite appears only as a toxic-dose table entry (180 mg/kg, rat, cytotoxicity) with no PK parameters. |
| popPK | Belenichev_2025 | irrelevant | 0 | 0 | Sodium nitrite is only used as a hypoxia-inducing agent in rats; no PK parameters for it are reported. |
| popPK | Buikema_1993 | irrelevant | 0 | 0 | Sodium nitrite is only a vasoactive probe in vascular relaxation assays; no PK parameters for it are reported. |
| popPK | Chinellato_1991 | irrelevant | 0 | 0 | In-vitro vascular pharmacology study; sodium nitrite is a vasodilator probe, no PK parameters reported. |
| PGx | Chuesaard_2023 | not_relevant | 0 | 0 | Plant seed germination study with no gene variant/genotype effects on PK/PD parameters of sodium nitrite. |
| popPK | Clària_1994 | irrelevant | 0 | 0 | In-vitro vascular relaxation study where sodium nitrite is only a pharmacologic probe, with no PK disposition parameters. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | This is a risk assessment of nitrite in animal feed with no pharmacokinetic disposition parameters (CL, V, half-life, PK model) for sodium nitrite reported. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | EFSA risk assessment of nitrosamines in food; no PK parameters for sodium nitrite. |
| popPK | EFSA_2023_2 | irrelevant | 0 | 0 | This is an EFSA risk assessment of bisphenol A, not a PK study of sodium nitrite, and no PK parameters appear. |
| popPK | Fan_2025 | irrelevant | 0 | 0 | This is a review of flavonoids in neurological diseases with no sodium nitrite PK data or parameters. |
| popPK | Gebremedhin_1987 | irrelevant | 0 | 0 | In-vitro pharmacology study of vascular relaxation in rabbit aortic strips; sodium nitrite is only a tool drug, no PK parameters. |
| popPK | Grimm_2023 | irrelevant | 0 | 0 | This is a PK study of trontinemab/gantenerumab antibodies, not sodium nitrite; no sodium nitrite parameters appear. |
| popPK | Hayashi_1984 | irrelevant | 0 | 0 | Sodium nitrite is only a vasorelaxation comparator in isolated artery strips; no PK disposition parameters are reported. |
| popPK | Henning_2002 | irrelevant | 0 | 0 | Sodium nitrite is only used as a vasodilator probe in aortic ring experiments; no PK parameters reported. |
| popPK | Imani_2025 | irrelevant | 0 | 0 | This is a wound-dressing/lawsone extraction study; sodium nitrite appears only as a colorimetric reagent, with no PK parameters for it. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | This is a clinical study of leptospirosis with no pharmacokinetic data on sodium nitrite. |
| popPK | Kagelmacher_2025 | irrelevant | 0 | 0 | This is an in-vitro anti-inflammatory study of dendritic polyglycerol sulfate in macrophages; sodium_nitrite is not studied and no PK parameters appear. |
| popPK | Kirouac_2019 | irrelevant | 0 | 0 | This is a commentary on QSP model reproducibility; sodium nitrite is not the subject drug and no PK parameters for it appear. |
| popPK | Korcan_2025 | irrelevant | 0 | 0 | Sodium nitrite is only a reagent in the Folin–Ciocalteu/flavonoid assays; no PK parameters for it are reported. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | This is a review of iodine-124 radiochemistry and immunoPET imaging; sodium nitrite is not mentioned and no PK parameters for it exist. |
| popPK | Lad_2026 | irrelevant | 0 | 0 | This is a phytochemical/bioactivity study of Eucalyptus globulus essential oil; sodium nitrite appears only as a reagent, with no PK parameters. |
| popPK | Lahnsteiner_2008 | irrelevant | 0 | 0 | Toxicity screening study (EC50) in zebrafish embryos; no PK disposition parameters for sodium nitrite. |
| popPK | Liu_1994 | irrelevant | 0 | 0 | In-vitro vascular pharmacology study of peroxynitrite; sodium nitrite is only a comparator with no PK disposition parameters. |
| PGx | Liu_2015 | not_relevant | 0 | 0 | Plant study of NO donors in cadmium stress; no gene variant effects on PK/PD of sodium nitrite. |
| PGx | Liu_2015_2 | not_relevant | 0 | 0 | Plant study using sodium nitrite only as an SNP analog control; no gene variant/genotype effect on PK/PD parameters. |
| popPK | Marshall_2026 | irrelevant | 0 | 0 | This is a neuroscience study of striatal mGluR5 signaling and dSPN activity in mice; sodium_nitrite is not mentioned and no PK parameters are reported. |
| popPK | Ortaakarsu_2025 | irrelevant | 0 | 0 | This is an in vitro enzyme-inhibition/phytochemistry study of Cardaria draba extract; sodium nitrite is only a colorimetric reagent in the flavonoid assay, with no PK parameters for it. |
| PGx | Park_2023 | not_relevant | 0 | 0 | In vitro drug combination study of sodium nitrite against Acanthamoeba; no gene variant/genotype/phenotype effects on PK or PD parameters reported. |
| popPK | Quah_2020 | irrelevant | 0 | 0 | This is an in vitro anti-inflammatory/antioxidant study of a Cornus officinalis extract; sodium nitrite appears only as a reagent for NO standard curves, with no PK parameters. |
| popPK | Rekowski_2025 | irrelevant | 0 | 0 | This is a CONSORT-DEFINE reporting-guideline paper about dose-finding trial reporting; sodium_nitrite is not studied and no PK parameters for it appear. |
| popPK | Sellimi_2017 | irrelevant | 0 | 0 | This is a food-technology study using sodium nitrite as a meat-curing additive, with no pharmacokinetic parameters reported. |
| popPK | Shelkovnikov_2004 | irrelevant | 0 | 0 | Sodium nitrite is only an NO-donor comparator in an in-vitro vascular study; no PK disposition parameters for it are reported. |
| popPK | Sreekumar_2022 | irrelevant | 0 | 0 | The paper is about chitosan biopolymer properties; sodium nitrite is not the subject drug and no PK parameters are reported. |
| popPK | Sylvester_1983 | irrelevant | 2 | 1 | Sodium nitrite is only mentioned as a co-administered antidote; the PK model concerns cyanide/thiocyanate in dogs, and no numeric parameters appear in the evidence. |
| popPK | Troches-Mafla_2025 | irrelevant | 0 | 0 | This is a review of diltiazem hydrochloride controlled-release formulations, not a PK study of sodium nitrite; no sodium nitrite parameters are present. |
| popPK | Vidrio_1998 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of vasorelaxation in rat aortic rings; no PK disposition parameters for sodium nitrite are reported. |
| PGx | Wang_2011 | not_relevant | 0 | 0 | Plant physiology study; sodium nitrite is a breakdown product control, no gene variant or PK/PD pharmacogenomic effect reported. |
| popPK | Wanstall_1992 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Wanstall_1994 | irrelevant | 0 | 0 | In vitro vascular pharmacology study; sodium nitrite is only a test vasodilator with EC50 shifts, no PK disposition parameters. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | This is a review of Acanthamoeba keratitis redox biology; sodium nitrite appears only as an in-vitro NO-donor comparator with no PK parameters. |
| popPK | White_1988 | irrelevant | 0 | 0 | In vitro pharmacodynamic study of vasorelaxation in isolated human arteries; no PK disposition parameters for sodium nitrite. |
| popPK | Willis_2022 | irrelevant | 0 | 0 | Atmospheric aerosol chemistry study of ozone reactions with nitrite; no pharmacokinetic disposition parameters for sodium nitrite. |
| popPK | Xiang_2018 | irrelevant | 0 | 0 | This is a PD model of baicalein in RAW264.7 cells; sodium nitrite appears only as a Griess assay standard, with no PK parameters for it. |
| popPK | Yang_2015 | irrelevant | 0 | 0 | Food chemistry study on fish protein hydrolysates with no pharmacokinetic data for sodium nitrite. |
| popPK | da_2013 | irrelevant | 0 | 0 | Sodium nitrite is only used as an NO donor in in vitro cavernosal relaxation assays; no PK parameters for it are reported. |
| popPK | de_2024 | irrelevant | 0 | 0 | In-vitro vascular pharmacology study in mouse aortic rings with no PK disposition parameters for sodium nitrite. |
| PGx | von_2006 | not_relevant | 2 | 3 | Reports hypersensitivity of bacterial mutants to sodium nitrite as a growth phenotype, not a pharmacogenomic effect on a PK/PD parameter. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:28 UTC</sub>
