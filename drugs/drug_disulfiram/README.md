<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;disulfiram&quot;}]"></div>

# disulfiram

- **generic name:** disulfiram
- **ATC codes:** `N07BB01`, `P03AA04`
- **DrugBank:** [DB00822](https://go.drugbank.com/drugs/DB00822) · **PubChem:** [CID 3117](https://pubchem.ncbi.nlm.nih.gov/compound/3117)
- **molar mass:** 296.539 g/mol (C10H20N2S4) — DrugBank
- **groups:** approved, investigational

## About

Disulfiram is used as a deterrent to help people with alcohol dependence stay abstinent, and has also been studied for other conditions such as retinitis pigmentosa. It is an approved medicine used in the treatment of alcohol dependence, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409665](https://www.wikidata.org/wiki/Q409665) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| disulfiram | parent | 296.539 | C10H20N2S4 | DrugBank | [3117](https://pubchem.ncbi.nlm.nih.gov/compound/3117) | Lee_2019 |
| carbamathione (M4) | metabolite | — (mass units only) | — | — | — | — |
| DDTC (M1) | metabolite | 148.262 | C5H10NS2- | PubChem | [28343](https://pubchem.ncbi.nlm.nih.gov/compound/28343) | Lee_2019 |
| DDTC-Me (M2) | metabolite | 163.297 | C6H13NS2 | PubChem | [12704](https://pubchem.ncbi.nlm.nih.gov/compound/12704) | Lee_2019 |
| DETC-MeSO (M3) | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:28 | 28:39 | 0/0/1 | 11/1/0 | 0/0/0 | 921,174/32,884 | ollama / glm-5.3-flash | 33 | 2/27 | 31/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: nonlinear topology</sub><br><sub>route_to: `manual_model_class`</sub> | [Lee_2019_reference](drugs/drug_disulfiram/Disulfiram_Lee2019_reference.md) | — | nonlinear / manual (no model) | 3 | Lee SA et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1220](https://doi.org/10.1002/cpt.1220) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gruber_2020_VCL](drugs/drug_disulfiram/pd_Gruber_2020_VCL.md) | sperm motility (curvilinear velocity, VCL, % of DMSO control) ← Disulfiram · direct sigmoid Emax (Hill) effect | — | Gruber FS et al., A phenotypic screening platform utilisi…, eLife (2020) | [10.7554/elife.51739](https://doi.org/10.7554/elife.51739) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Hennighausen_1988_mitotic_activity_of_thymocytes_metaphases_blocked_by_colchicine](drugs/drug_disulfiram/pd_Hennighausen_1988_mitotic_activity_of_thymocytes_metaphases_.md) | mitotic activity of thymocytes (metaphases blocked by colchicine) ← disulfiram (tetraethylthiuram disulfide) · inhibition effect | — | Hennighausen G et al., [Effects of dithiocarbamates on the mit…, Die Pharmazie (1988) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Johnson_2010_BCECF](drugs/drug_disulfiram/pd_Johnson_2010_BCECF.md) | BCECF fluorescence intensity (vacuolar pH) ← disulfiram · inhibition effect | — | Johnson RM et al., Identification of inhibitors of vacuola…, Analytical biochemistry (2010) | [10.1016/j.ab.2009.12.020](https://doi.org/10.1016/j.ab.2009.12.020) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Katz_1992_PBR_binding_cortex](drugs/drug_disulfiram/pd_Katz_1992_PBR_binding_cortex.md) | Specific [3H]PK 11195 binding to peripheral benzodiazepine receptors in rat cerebral cortex ← disulfiram · inhibition effect | — | Katz Y et al., Disulfiram and diethyldithiocarbamate a…, The Journal of pharmacology… (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Katz_1992_PBR_binding_kidney_PK_11195](drugs/drug_disulfiram/pd_Katz_1992_PBR_binding_kidney_PK_11195.md) | Specific [3H]PK 11195 binding to peripheral benzodiazepine receptors in rat kidney ← disulfiram · inhibition effect | — | Katz Y et al., Disulfiram and diethyldithiocarbamate a…, The Journal of pharmacology… (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Katz_1992_PBR_binding_kidney_Ro_5_4864](drugs/drug_disulfiram/pd_Katz_1992_PBR_binding_kidney_Ro_5_4864.md) | Specific [3H]Ro 5-4864 binding to peripheral benzodiazepine receptors in rat kidney ← disulfiram · inhibition effect | — | Katz Y et al., Disulfiram and diethyldithiocarbamate a…, The Journal of pharmacology… (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Lipsky_2001_rmALDH_inhibition_DSF](drugs/drug_disulfiram/pd_Lipsky_2001_rmALDH_inhibition_DSF.md) | aldehyde dehydrogenase (rmALDH) activity inhibition by disulfiram ← disulfiram · inhibition effect | — | Lipsky JJ et al., Overview--in vitro inhibition of aldehy…, Chemico-biological interact… (2001) | [10.1016/s0009-2797(00)00224-6](https://doi.org/10.1016/s0009-2797(00)00224-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Muth-Köhne_2012_MND](drugs/drug_disulfiram/pd_Muth_K_hne_2012_MND.md) | motor neuron defects (primary and secondary motor neurons, znp1/zn8 immunostaining) ← disulfiram · direct sigmoid Emax (Hill) effect | — | Muth-Köhne E et al., The classification of motor neuron defe…, Neurotoxicology and teratol… (2012) | [10.1016/j.ntt.2012.04.006](https://doi.org/10.1016/j.ntt.2012.04.006) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pasquereau_2021_CC50](drugs/drug_disulfiram/pd_Pasquereau_2021_CC50.md) | Cell viability (cytotoxicity, MTT assay) ← disulfiram · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pasquereau_2021_PFU](drugs/drug_disulfiram/pd_Pasquereau_2021_PFU.md) | Inhibition of HCoV-229E replication (plaque forming units) ← disulfiram · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Riendeau_1991_LTB4](drugs/drug_disulfiram/pd_Riendeau_1991_LTB4.md) | calcium ionophore-induced leukotriene B4 release by human polymorphonuclear leukocytes ← disulfiram · inhibition effect | — | Riendeau D et al., Inhibition of leukotriene B4 biosynthes…, General pharmacology (1991) | [10.1016/0306-3623(91)90466-j](https://doi.org/10.1016/0306-3623(91)90466-j) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wertheimer_2017_cell_growth_FHL_124_lens_epithelial_cell_proliferation](drugs/drug_disulfiram/pd_Wertheimer_2017_cell_growth_FHL_124_lens_epithelial_cell_pro.md) | cell growth (FHL-124 lens epithelial cell proliferation) ← disulfiram · direct sigmoid Emax (Hill) effect | — | Wertheimer C et al., The Intraocular Lens as a Drug Delivery…, Investigative ophthalmology… (2017) | [10.1167/iovs.17-22555](https://doi.org/10.1167/iovs.17-22555) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xiao_2009_ALDH1A1_activity](drugs/drug_disulfiram/pd_Xiao_2009_ALDH1A1_activity.md) | human lens ALDH1A1 enzyme activity inhibition by disulfiram ← disulfiram · inhibition effect | — | Xiao T et al., Molecular cloning and oxidative modific…, Journal of toxicology and e… (2009) | [10.1080/15287390802706371](https://doi.org/10.1080/15287390802706371) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span> | [Xu_2019_Cl_current](drugs/drug_disulfiram/pd_Xu_2019_Cl_current.md) | activation of Cl- channel (Cl- current induction) ← disulfiram (DSF) · direct Emax (saturable) effect | — | Xu X et al., Antitumor effects of disulfiram/copper…, Biomedicine & pharmacothera… (2019) | [10.1016/j.biopha.2019.109529](https://doi.org/10.1016/j.biopha.2019.109529) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span> | [Xu_2019_Cl_current_2](drugs/drug_disulfiram/pd_Xu_2019_Cl_current_2.md) | activation of Cl- channel (Cl- current induction) ← disulfiram/copper complex (DSF/Cu2+) · direct Emax (saturable) effect | — | Xu X et al., Antitumor effects of disulfiram/copper…, Biomedicine & pharmacothera… (2019) | [10.1016/j.biopha.2019.109529](https://doi.org/10.1016/j.biopha.2019.109529) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2019_CA_US_HIV_RNA](drugs/drug_disulfiram/pd_Lee_2019_CA_US_HIV_RNA.md) | cell-associated unspliced HIV-1 RNA ← disulfiram · direct sigmoid Emax (Hill) effect | — | Lee SA et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1220](https://doi.org/10.1002/cpt.1220) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=disulfiram) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `ALDH2` inhibitor, `CYP2E1` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ALDH3A2 (inhibitor), DBH (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 295 matched, 142 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2026 | irrelevant | 0 | 0 | Systematic review/meta-analysis of AUD pharmacotherapy efficacy by sex; no disulfiram PK parameters reported. |
| PGx | Argüello-García_2021 | not_relevant | 0 | 0 | Paper reviews Giardia virulence factors; disulfiram mentioned only as a cysteine-modifying compound, with no gene variant effect on its PK/PD parameters. |
| popPK | Batlle_2025 | irrelevant | 0 | 0 | This is a computational ALDH1A3 inhibitor discovery study; disulfiram is only mentioned as a known ALDH inhibitor, with no PK parameters for it. |
| PGx | Bell_2012 | not_relevant | 2 | 1 | This is only an introduction/overview mentioning pharmacogenetics generally, with no specific gene-variant effects on disulfiram PK/PD parameters. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | This is an in vitro drug-combination synergy ML study with no disulfiram PK parameters or disposition values. |
| PGx | Caputo_2014 | not_relevant | 2 | 0 | Abstract-level review discussing pharmacogenetics of alcohol dependence treatment generally, with no specific gene-variant effect on disulfiram PK/PD parameters reported. |
| popPK | Chen_2008 | irrelevant | 0 | 0 | In-vitro astrocyte cytotoxicity study; disulfiram only mentioned as a chelator, no PK parameters. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | This is a narrative review of paclitaxel nanomedicines; disulfiram is not the subject drug and no disulfiram PK parameters are reported. |
| popPK | Cobbina_2021 | irrelevant | 0 | 0 | The paper models PF-5190457, a different drug; disulfiram is not mentioned. |
| PGx | Corsello_2020 | not_relevant | 3 | 5 | Reports MT1E/MT2A expression and 16q copy number as biomarkers of disulfiram cytotoxicity in cancer cell lines (viability IC50-like response), not a pharmacogenomic effect on a clinical PK or PD parameter of disulfiram. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir; disulfiram is only mentioned as a disulfiram-like reaction risk, with no PK parameters for disulfiram. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | Paper reviews lopinavir/ritonavir; disulfiram only mentioned as a contraindicated coadministration due to ethanol content, with no pharmacogenomic effect on PK/PD. |
| PGx | Damkier_1999 | not_relevant | 0 | 0 | Disulfiram is given as a CYP2E1 inhibitor (drug interaction), not a gene variant/genotype effect on PK/PD. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | Disulfiram is only used as an ALDH2 inhibitor tool compound; no PK parameters for disulfiram are reported. |
| popPK | Dos-Santos_2025 | irrelevant | 0 | 0 | This is a rat study of ketamine's cardiovascular effects; disulfiram is only mentioned as a comparator in cited literature, with no PK parameters for disulfiram. |
| popPK | EFSA_2019 | irrelevant | 0 | 0 | EFSA risk assessment on quinolizidine alkaloids (sparteine etc.), no disulfiram PK parameters reported. |
| popPK | Elliott_2015 | irrelevant | 2 | 0 | HIV latency trial with no PK disposition parameters for disulfiram reported; only drug exposure mentioned qualitatively. |
| PGx | Frye_1999 | not_relevant | 2 | 3 | Disulfiram is used as a CYP2E1 inhibitor probe, not a pharmacogenomic variant/genotype effect on disulfiram's own PK/PD. |
| PGx | Frye_2002 | not_relevant | 0 | 0 | This is a drug-drug/enzyme inhibition study of disulfiram's effects on CYP activities, not a pharmacogenomic (gene variant/genotype) effect on disulfiram PK/PD. |
| PGx | Goh_2017 | not_relevant | 2 | 1 | Abstract only mentions pharmacogenetics generically; no gene variant effect on disulfiram PK/PD parameters reported. |
| popPK | Gomez_2025 | irrelevant | 0 | 0 | This is a cocaine chemogenetics study in rats; disulfiram is not mentioned and no PK parameters for disulfiram appear. |
| popPK | Gruber_2020 | irrelevant | 0 | 0 | This is a sperm motility screening study; disulfiram is only a screening hit with an in-vitro EC50/effect, no PK disposition parameters. |
| PGx | Hazai_2002 | not_relevant | 0 | 5 | Disulfiram is studied only as a CYP2E1 inhibitor (IC50) affecting acetaminophen metabolism, not a gene variant effect on disulfiram PK/PD. |
| PGx | Helton_2015 | not_relevant | 5 | 1 | Review abstract only; no specific gene-variant effects on disulfiram PK/PD parameters are reported in the provided text. |
| popPK | Hennighausen_1988 | irrelevant | 0 | 0 | In vitro/in vivo pharmacology study of dithiocarbamates on thymocyte mitosis; no PK parameters (CL, V, ka, half-life, model) for disulfiram are reported. |
| PGx | Hultsch_2018 | not_relevant | 0 | 0 | Paper studies tamoxifen resistance and disulfiram sensitivity in cell lines; no gene variant/genotype effect on disulfiram PK/PD parameters reported. |
| popPK | Igwe_1986 | irrelevant | 1 | 0 | Disulfiram is only a pretreatment modifier; the PK parameters (Km, Vmax) are for 1,2-dichloroethane, not disulfiram, and no numeric values are given. |
| popPK | Iljin_2009 | irrelevant | 0 | 0 | In-vitro/in-vivo cancer efficacy screening of disulfiram with no PK parameters reported. |
| PGx | J_2019 | not_relevant | 4 | 3 | Computational docking/MD of disulfiram binding to ALDH2*2, not a measured PK/PD parameter change in vivo. |
| popPK | Johnson_2010 | irrelevant | 0 | 0 | In-vitro yeast screening study of disulfiram as a V-ATPase inhibitor; no pharmacokinetic parameters for disulfiram are reported. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | This is a computational drug–food interaction prediction study with no disulfiram PK parameters; disulfiram is not the subject drug and no PK values are present. |
| PGx | Kenna_2004 | not_relevant | 2 | 0 | General narrative review on alcoholism pharmacotherapy; no gene-variant effect on disulfiram PK/PD parameters reported. |
| PGx | Kenna_2004_2 | not_relevant | 2 | 1 | Narrative review discussing pharmacogenomics' future role in alcohol dependence treatment; no gene-variant effects on disulfiram PK/PD parameters reported. |
| PGx | Kharasch_1999 | not_relevant | 2 | 5 | Reports disulfiram's drug–drug interaction effects on CYP probe activities, not a gene variant/genotype effect on disulfiram PK/PD. |
| PGx | Kharasch_2000 | not_relevant | 0 | 0 | Disulfiram is only mentioned as a CYP2E1 inhibitor; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| PGx | Kosten_2013 | not_relevant | 4 | 5 | Genotype modifies clinical treatment response (cocaine-positive urines), not a PK or PD parameter of disulfiram itself. |
| PGx | Kranzler_2018 | not_relevant | 0 | 0 | Review of AUD pharmacotherapy with no pharmacogenomic effect on disulfiram PK/PD parameters reported. |
| PGx | Langhammer_2014 | not_relevant | 0 | 0 | Disulfiram is only used as a positive control inhibitor of CYP2E1; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| popPK | Leal_2023 | irrelevant | 0 | 0 | This is a population-wide polypharmacy/dosage-adjustment registry study; disulfiram appears only as one co-medication pair with an odds ratio, with no PK parameters. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | Disulfiram is studied only as a CYP2E1 inhibitor in vitro; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| PGx | Lehner_2024 | not_relevant | 3 | 1 | Review abstract mentions ALDH2 polymorphisms and disulfiram use but reports no gene-variant effect on disulfiram PK/PD parameters. |
| PGx | Lennard_1998 | not_relevant | 3 | 2 | Only a speculative statement that TPMT may S-methylate a disulfiram metabolite; no genotype effect on any PK/PD parameter is reported. |
| PGx | Levy_1995 | not_relevant | 2 | 3 | Disulfiram is mentioned only as a CYP2C9 inhibitor of phenytoin metabolism; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| PGx | Liu_2003 | not_relevant | 0 | 0 | Disulfiram is only used as a nonspecific CYP inhibitor in vitro; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | This is a review of nanomedicine-based chemodynamic cancer therapy; disulfiram is not the subject drug and no PK parameters appear. |
| PGx | Manyike_2000 | not_relevant | 0 | 0 | Disulfiram is used as a CYP2E1 inhibitor probe, not a study drug; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| PGx | Meeley_1991 | not_relevant | 0 | 0 | Disulfiram is only used as an enzyme inhibitor in plant toxin metabolism; no pharmacogenomic effect on disulfiram PK/PD is reported. |
| PGx | Mitra_1995 | not_relevant | 0 | 5 | Disulfiram is used as a CYP2E1 inhibitor probe, not as the drug of interest, and no gene variant/genotype effect on disulfiram PK/PD is reported. |
| popPK | Muth-Köhne_2012 | irrelevant | 0 | 0 | Toxicity study in zebrafish embryos reporting EC50 neurotoxicity values, not pharmacokinetic disposition parameters for disulfiram. |
| PGx | Mutschler_2013 | not_relevant | 3 | 1 | Review mentions pharmacogenetics only in passing with no gene-variant effect on disulfiram PK/PD parameters reported. |
| popPK | Nishigaki_1985 | irrelevant | 0 | 0 | The evidence contains only a GROBID processing header with no paper content, so no PK parameters for disulfiram are present. |
| popPK | Ogungbite_2026 | irrelevant | 0 | 0 | Narrative review of AI drug repurposing with no disulfiram PK parameters or numeric disposition values. |
| popPK | Pasquereau_2021 | irrelevant | 0 | 0 | In vitro antiviral screening study; disulfiram only tested for cytotoxicity (CC50 8.4 µM), no PK disposition parameters for disulfiram. |
| PGx | Pentiuk_2004 | not_relevant | 2 | 1 | Review mentions disulfiram only as a CYP2E1 inhibitor, not a gene variant effect on disulfiram PK/PD. |
| PGx | Pike_2001 | not_relevant | 2 | 5 | In vitro enzyme characterization of MeDDC metabolism; no gene variant/genotype effect on disulfiram PK/PD reported. |
| PGx | Ragia_2017 | not_relevant | 3 | 0 | Abstract of a general review on alcoholism pharmacogenomics; no specific gene effect on disulfiram PK/PD parameters reported. |
| popPK | Rand_1994 | irrelevant | 0 | 0 | Disulfiram is only used as a dehydrogenase inhibitor tool in an in-vitro rat tissue study; no PK parameters reported. |
| PGx | Reid_1999 | not_relevant | 0 | 0 | Disulfiram is only used as a CYP2E1 chemical inhibitor of dacarbazine metabolism; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| popPK | Ryu_2007 | irrelevant | 2 | 3 | Disulfiram is used only as a CYP2E1 inhibitor probe; the PK parameters (clearance, distribution volumes) are for the radioligand (18)F-FCWAY, not disulfiram itself. |
| popPK | Saha_2023 | irrelevant | 0 | 0 | In-vitro formulation study with no pharmacokinetic parameters for disulfiram. |
| PGx | Schmidtova_2020 | not_relevant | 0 | 0 | Disulfiram is only used as an in vitro cytotoxicity agent; no gene variant/genotype effect on its PK/PD parameters is reported. |
| popPK | Schärfe_2017 | irrelevant | 0 | 0 | This is a pharmacogenomics survey of genetic variation in drug-related genes; disulfiram is not a PK study subject and no PK parameters appear. |
| popPK | She_2025 | irrelevant | 0 | 0 | The paper is about bunamidine hydrochloride (BUN) as an antimicrobial, not disulfiram; PK values (t½, bioavailability) refer to BUN and partly to supplementary Table S3. |
| popPK | Shimada_1987 | irrelevant | 1 | 0 | Disulfiram is only mentioned as a "disulfiram-like reaction" descriptor; the study models ethanol elimination kinetics in rats, not disulfiram PK, and no disulfiram parameter values appear. |
| PGx | Shinn_2010 | not_relevant | 0 | 0 | Review of topiramate for substance disorders; no gene variant effect on disulfiram PK/PD reported. |
| PGx | Shorter_2011 | not_relevant | 1 | 0 | Review mentions disulfiram efficacy and future pharmacogenetics only; no gene variant effect on PK/PD parameters reported. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | This is a COVID-19 statin drug-repurposing study with no disulfiram PK data or parameters of any kind. |
| popPK | Su_2025 | irrelevant | 0 | 0 | Disulfiram is only mentioned as a previously co-formulated drug; no PK parameters for disulfiram are reported. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | Disulfiram is only a comparator (DSF) in a pyroptosis/GSDMD peptide study; no disulfiram PK parameters are reported. |
| PGx | Sztajnkrycer_2003 | not_relevant | 0 | 0 | Disulfiram is used as a CYP inhibitor in mice; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| PGx | Talwelkar_2021 | not_relevant | 2 | 0 | Disulfiram sensitivity is reported from ex vivo FUTC drug screening in one patient; no gene variant effect on disulfiram PK/PD parameters is described. |
| PGx | Uehara_2021 | not_relevant | 0 | 0 | Disulfiram is only used as an ALDH inhibitor tool in vitro; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | Disulfiram is only listed as a drug interacting with theophylline clearance; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| PGx | Van_2016_2 | not_relevant | 1 | 1 | Mentions ALDH2*2 causing disulfiram-like reactions to ethanol, but no PK/PD parameter of disulfiram itself is quantified. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | A network meta-analysis of antiemetic drugs for PONV with no disulfiram PK parameters; disulfiram not mentioned at all. |
| popPK | Wertheimer_2017 | irrelevant | 0 | 0 | In-vitro cell proliferation study; disulfiram is only one screened substance with an EC50, no PK disposition parameters. |
| PGx | Wormhoudt_1996 | not_relevant | 0 | 0 | Disulfiram is only used as a CYP2E1 inhibitor probe; no gene variant/genotype effect on disulfiram PK/PD is reported. |
| popPK | Xiao_2009 | irrelevant | 0 | 0 | In-vitro enzyme inhibition study; disulfiram is only an ALDH1A1 inhibitor with an IC50, no PK parameters. |
| popPK | Xu_2019 | irrelevant | 0 | 0 | In-vitro/in-vivo antitumor mechanism study; no PK disposition parameters for disulfiram, only EC50 cytotoxicity values. |
| PGx | Zastrozhin_2019 | not_relevant | 4 | 5 | Discusses DBH 1021C&gt;T and ANKK1/DRD2 effects on disulfiram clinical efficacy/adverse effects, but reports no significant difference and no fitted PK/PD parameter changes. |
| popPK | Zhu_2021 | irrelevant | 1 | 1 | Disulfiram is only a co-administered ALDH2 inhibitor in a PBPK model of ethanol/acetaldehyde; no disulfiram PK parameters are reported, and its effect is based on in vitro data in supplementary text. |
| PGx | Zhu_2021 | not_relevant | 2 | 3 | The paper models disulfiram's inhibition of ALDH2 and ALDH2 genotype effects on acetaldehyde exposure, but does not report a gene variant altering a PK/PD parameter of disulfiram itself. |
| PGx | Zindel_2014 | not_relevant | 1 | 0 | Review abstract only mentions pharmacogenetics as a future direction; no gene-variant effects on disulfiram PK/PD parameters reported. |
| popPK | Zuppa_2011 | irrelevant | 0 | 0 | This is a population PK study of acetaminophen, not disulfiram; no disulfiram parameters are present. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| popPK | van_2016 | irrelevant | 0 | 0 | This is a population PK study of acetaminophen, not disulfiram; disulfiram is only mentioned as an excluded co-medication (CYP2E1 inhibitor). |
| PGx | van_2017 | not_relevant | 0 | 0 | Disulfiram is studied as a BVRA inhibitor in Gunn rats; no gene variant/genotype effect on disulfiram PK or PD is reported. |
| PGx | von_1984 | not_relevant | 3 | 2 | Discusses ALDH2 deficiency mimicking disulfiram's effect conceptually, but reports no quantitative PK/PD parameter change for disulfiram by genotype. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:19 UTC</sub>
