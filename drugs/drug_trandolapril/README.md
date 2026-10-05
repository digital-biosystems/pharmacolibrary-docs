<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;trandolapril&quot;}]"></div>

# trandolapril

- **generic name:** trandolapril
- **ATC codes:** `C09AA10`, `C09BB10`
- **DrugBank:** [DB00519](https://go.drugbank.com/drugs/DB00519) · **PubChem:** [CID 5484727](https://pubchem.ncbi.nlm.nih.gov/compound/5484727)
- **molar mass:** 430.5372 g/mol (C24H34N2O5) — DrugBank
- **groups:** approved, investigational

## About

Trandolapril is an ACE inhibitor used to treat high blood pressure and congestive heart failure. It is an approved medicine, available alone and in fixed combinations with calcium channel blockers for cardiovascular use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q929420](https://www.wikidata.org/wiki/Q929420) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trandolapril | parent | 430.537 | C24H34N2O5 | DrugBank | [5484727](https://pubchem.ncbi.nlm.nih.gov/compound/5484727) | Li_2016 |
| trandolaprilat | metabolite | 402.491 | C22H30N2O5 | PubChem | [5464097](https://pubchem.ncbi.nlm.nih.gov/compound/5464097) | Li_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 23:57 | 4:22 | 0/2/0 | 0/1/0 | 0/0/2 | 141,012/21,691 | ollama / glm-5.3-flash | 18 | 7/15 | 4/14 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2016_trandolapril](drugs/drug_trandolapril/Trandolapril_Li2016_trandolapril.md) | — | general linear (no model) | 11 | Li X et al., Pharmacokinetics, Pharmacodynamics, and…, European journal of drug me… (2016) | [10.1007/s13318-015-0277-2](https://doi.org/10.1007/s13318-015-0277-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2016_trandolaprilat](drugs/drug_trandolapril/Trandolapril_Li2016_trandolaprilat.md) | — | general linear (no model) | 13 | Li X et al., Pharmacokinetics, Pharmacodynamics, and…, European journal of drug me… (2016) | [10.1007/s13318-015-0277-2](https://doi.org/10.1007/s13318-015-0277-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Accorsi-Mendonça_2006_g](drugs/drug_trandolapril/pd_Accorsi_Mendon_a_2006_g.md) | carotid artery tension ← phenylephrine and angiotensin II (in vitro agonist concentrations) · direct Emax (saturable) effect | — | Accorsi-Mendonça D et al., B(2)-receptor modulation of the reactiv…, Journal of smooth muscle re… (2006) | [10.1540/jsmr.42.21](https://doi.org/10.1540/jsmr.42.21) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CES1** | `Q51` · kmet | formation | [Wang_2021](drugs/drug_trandolapril/pgx_Wang_2021_CES1_Q51.md) | Wang X et al., Impact of carboxylesterase 1 genetic po…, Clinical and translational… (2021) | [10.1111/cts.12989](https://doi.org/10.1111/cts.12989) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM popPK screen).">in vitro</span> | **CES1** | `Q3` · CLint | formation | [Zhu_2009](drugs/drug_trandolapril/pgx_Zhu_2009_CES1_Q3.md) | Zhu HJ et al., Role of carboxylesterase 1 and impact o…, Biochemical pharmacology (2009) | [10.1016/j.bcp.2008.12.017](https://doi.org/10.1016/j.bcp.2008.12.017) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trandolapril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | liver | `CES1` formation/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 61 matched, 58 returned
- **screened:** 19  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hirayama_1994.pdf` | Hirayama M et al., Pharmacokinetics of RU44403, an active…, Drug metabolism and disposi… (1994) | popPK | 8 | not captured | [7956736](https://pubmed.ncbi.nlm.nih.gov/7956736) | Rat PK study of trandolapril (RU44570) and its active metabolite with numeric half-lives and absorption fractions present in the abstract, though CL/V and full model parameters are not given. |
| `Bevan_1993.pdf` | Bevan EG et al., Effect of renal function on the pharmac…, British journal of clinical… (1993) | popPK | 7 | not captured | [8443030](https://pubmed.ncbi.nlm.nih.gov/8443030) | A PK study of trandolapril/trandolaprilat in humans, but the evidence is only an abstract reporting correlations (r values) without actual disposition parameter values, which presumably reside in the full paper's tables/figures not provided. |
| `Danielson_1994.pdf` | Danielson B et al., Pharmacokinetics and pharmacodynamics o…, Journal of cardiovascular p… (1994) | popPK | 7 | not captured | [7527102](https://pubmed.ncbi.nlm.nih.gov/7527102) | Original PK study of trandolapril/trandolaprilat with renal clearance and correlation data, but the evidence contains only abstract-level statistics (r values, Cmax/AUC relationships) without full numeric disposition parameters like CL or V. |
| `Arner_1994.pdf` | Arner P et al., Pharmacokinetics and pharmacodynamics o…, Journal of cardiovascular p… (1994) | popPK | 6 | not captured | [7527101](https://pubmed.ncbi.nlm.nih.gov/7527101) | PK study of trandolapril with Cmax/AUC/t1/2 reported, but no CL/V or compartmental parameters and half-life values not given numerically in the abstract. |
| `Conen_1993.pdf` | Conen H et al., Pharmacologic profile of trandolapril,…, American heart journal (1993) | pd | 5 | [10.1016/0002-8703(93)90450-n](https://doi.org/10.1016/0002-8703(93)90450-n) | [8480624](https://www.ncbi.nlm.nih.gov/pubmed/8480624) | metadata signals extractable PD data (IC50) |
| `Chevillard_1994.pdf` | Chevillard C et al., Compared properties of trandolapril, en…, Journal of cardiovascular p… (1994) | pd | 4 | not captured | [7527095](https://www.ncbi.nlm.nih.gov/pubmed/7527095) | metadata signals extractable PD data (IC50) |
| `Clark_2000.pdf` | Clark JF et al., The effects of anti-hypertensive therap…, Journal of muscle research… (2000) | pd | 4 | [10.1023/a:1005646614308](https://doi.org/10.1023/a:1005646614308) | [10952173](https://www.ncbi.nlm.nih.gov/pubmed/10952173) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-30T23:57:29.680323+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Accorsi-Mendonça_2006 | irrelevant | 0 | 0 | This is a vascular reactivity/pharmacodynamics study in rats; no PK disposition parameters (CL, V, ka, compartmental model) for trandolapril are reported, only a cited t1/2 of 24 h without any volume or clearance values. |
| popPK | Arner_1994 | relevant | 6 | 4 | PK study of trandolapril with Cmax/AUC/t1/2 reported, but no CL/V or compartmental parameters and half-life values not given numerically in the abstract. |
| popPK | Asmar_1992 | irrelevant | 2 | 0 | This is a pharmacodynamic dose-response study of trandolapril's arterial and antihypertensive effects, with no PK parameters (CL, V, ka, half-life) reported. |
| PGx | Beitelshees_2007 | not_relevant | 1 | 3 | The pharmacogenomic findings (KCNMB1 genotype effects on BP response and outcomes) pertain to verapamil SR, not to any PK or PD parameter of trandolapril, which is only mentioned as part of the study name. |
| popPK | Bevan_1993 | relevant | 7 | 2 | A PK study of trandolapril/trandolaprilat in humans, but the evidence is only an abstract reporting correlations (r values) without actual disposition parameter values, which presumably reside in the full paper's tables/figures not provided. |
| popPK | Buksa_2000 | irrelevant | 1 | 0 | This is a clinical review of the TRACE trial with no quantitative PK parameters for trandolapril reported. |
| PD | Buksa_2000 | not_relevant | 1 | 0 | Narrative review of TRACE trial outcomes; no concentration- or dose-effect data or numeric PD parameters reported. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | Narrative review of cardiovascular pharmacotherapy with no trandolapril PK parameters or numeric disposition values. |
| PD | Cabré_2026 | not_relevant | 1 | 0 | Narrative review of cardiovascular pharmacotherapy with no trandolapril-specific concentration- or dose-effect data or numeric PD parameters. |
| PGx | Chang_2018 | not_relevant | 3 | 5 | Outcome is new-onset diabetes risk by genotype and treatment strategy, not a PK/PD parameter of trandolapril. |
| popPK | Chevillard_1994 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Chevillard_1994 | not_relevant | 2 | 0 | Only a title is provided; no concentration-effect or dose-response data or numeric PD parameters are reported or derivable. |
| popPK | Clark_2000 | irrelevant | 0 | 0 | This is a vascular pharmacology study in rats with no PK parameters for trandolapril reported. |
| PD | Clark_2000 | not_relevant | 2 | 1 | Animal hypertension study comparing treatment effects on vascular properties; no drug concentration-effect or dose-response relationship for trandolapril with extractable PD parameters. |
| popPK | Conen_1993 | irrelevant | 3 | 2 | A narrative pharmacologic profile with only tmax (~6 h) and effective half-life (24 h) but no clearance, volume, or PK model parameters. |
| PD | Conen_1993 | not_relevant | 3 | 1 | Narrative review mentions dose-dependent ACE inhibition and an IC50 concept qualitatively, but no numeric PD parameters or effect-vs-concentration data are reported. |
| popPK | Danielson_1994 | relevant | 7 | 3 | Original PK study of trandolapril/trandolaprilat with renal clearance and correlation data, but the evidence contains only abstract-level statistics (r values, Cmax/AUC relationships) without full numeric disposition parameters like CL or V. |
| popPK | Diaz_2008 | irrelevant | 2 | 0 | This is a narrative review of trandolapril's clinical use with no numeric PK parameter values reported in the evidence. |
| PD | Diaz_2008 | not_relevant | 1 | 0 | Narrative review of trandolapril PK/PD and clinical outcomes with no numeric PD parameters or concentration/dose-effect data reported. |
| PGx | Eadon_2018 | not_relevant | 3 | 1 | Review abstract only mentions trandolapril via the INVEST study name without reporting any gene-variant effect on a trandolapril PK/PD parameter or effect size. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This is a drug-safety/AKI knowledge aggregation study; trandolapril appears only in a drug list, with no PK parameters reported. |
| PD | Fernández-Llaneza_2025 | not_relevant | 0 | 0 | Pharmacovigilance knowledge-aggregation study on drug-induced AKI; no trandolapril concentration- or dose-effect data or PD parameters. |
| popPK | Fischer_2021 | irrelevant | 2 | 3 | This is a narrative review of dosing frequency for ACE inhibitors; trandolapril appears only with basic PD/half-life summary values (t½ ~6 h, Tmax ~1 h) in a comparison table, with no CL, V, or population-PK model parameters. |
| PD | Fischer_2021 | not_relevant | 2 | 1 | Narrative review of dosing frequency with only qualitative PD discussion; no numeric PD parameters or effect-vs-concentration data for trandolapril are extractable. |
| popPK | Fischler_1999 | irrelevant | 2 | 1 | This is a review of ACE inhibitors with only scattered descriptive values (bioavailability 11%, half-life ranges) and no quantitative PK parameters (CL, V, ka) for trandolapril. |
| PD | Fischler_1999 | not_relevant | 1 | 0 | Narrative review of ACE inhibitors with only qualitative PK/PD comparisons (half-life groups, bioavailability ranges); no concentration-effect or dose-response relationship or numeric PD parameters for trandolapril. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | Network-based drug repurposing study for COVID-19 with no trandolapril PK parameters; trandolapril not even mentioned. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | Network-based drug repurposing algorithm; trandolapril appears only as a predicted repurposable drug with no PD, exposure-response, or dose-effect data. |
| popPK | Galløe_2006 | irrelevant | 1 | 0 | This is a dose-response efficacy study of trandolapril plus bumetanide in heart failure, with no PK parameters (CL, V, ka, half-life, or population-PK model) reported. |
| PGx | Gong_2015 | not_relevant | 2 | 3 | The paper reports PTPRD associations with BP response to atenolol/hydrochlorothiazide and resistant hypertension within the INVEST (verapamil/trandolapril) cohort, but no pharmacogenomic effect on a PK or PD parameter of trandolapril itself is reported. |
| popPK | Hermida_2005 | irrelevant | 0 | 0 | This is a review of chronotherapy effects on blood pressure with no PK parameters or numeric disposition values for trandolapril. |
| PD | Hermida_2005 | not_relevant | 1 | 0 | Narrative review qualitatively mentions chronotherapy effects of trandolapril on circadian BP with no numeric PD parameters or concentration/dose-effect data. |
| popPK | Jouquey_1994 | irrelevant | 1 | 0 | This is a pharmacodynamic dose-response study in rats with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| PGx | Karnes_2013 | not_relevant | 1 | 2 | The paper reports KCNJ1 effects on fasting glucose/NOD during hydrochlorothiazide treatment; trandolapril is only mentioned as an add-on drug with no pharmacogenomic effect on its PK/PD parameters. |
| popPK | Kenna_2005 | irrelevant | 0 | 0 | A review on adherence modeling with no trandolapril PK parameters or any drug-specific disposition values present. |
| PD | Kenna_2005 | not_relevant | 1 | 0 | Review of adherence modeling methodology focused on HIV; no trandolapril PD or exposure-response data or parameters reported. |
| PGx | Lambert_2016 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between ibrutinib and verapamil (CYP3A4 inhibition); trandolapril is only mentioned incidentally with no gene variant/genotype/phenotype effect on its PK or PD parameters. |
| PGx | Langaee_2007 | not_relevant | 0 | 0 | The paper examines CYP3A5 genotype effects on blood pressure and verapamil response, not trandolapril PK/PD parameters. |
| popPK | Leighton_1996 | irrelevant | 0 | 0 | This is an in-vitro metabolic/insulin-sensitivity study in rat muscle with no pharmacokinetic disposition parameters for trandolapril. |
| popPK | Leonetti_1995 | irrelevant | 2 | 0 | This is a review of ACE inhibitors with no original quantitative PK parameters for trandolapril; only qualitative discussion of half-life and trough-to-peak ratios. |
| PD | Leonetti_1995 | not_relevant | 1 | 0 | Narrative review of ACE inhibitor class PK/PD with no numeric PD parameters or concentration/dose-effect data for trandolapril. |
| PGx | Lewis_2013 | not_relevant | 0 | 0 | Trandolapril appears only in the INVEST study name; the pharmacogenomic findings concern aspirin/clopidogrel platelet response, not trandolapril PK/PD. |
| popPK | Li_2016 | relevant | 6 | 4 | Trandolapril is the subject drug with some PK values (Cmax, AUC, excretion, R) present, but core disposition parameters (CL, V, t½, ka) are not shown and likely reside in tables/figures not provided. |
| PD | Li_2016 | not_relevant | 3 | 2 | PD is assessed only as descriptive blood pressure/heart rate changes over time after dosing (peak BP reduction at 8 h), with no concentration-effect or dose-effect model and no numeric PD parameters (Emax, EC50, slope, E0) stated or derivable. |
| PGx | Magvanjav_2017 | not_relevant | 2 | 5 | The genetic associations reported concern uncontrolled BP on thiazide diuretic/β-blocker combination therapy, not any PK or PD parameter of trandolapril; trandolapril appears only in the INVEST trial name. |
| PGx | McDonough_2013 | not_relevant | 2 | 5 | The paper reports SNP-treatment interactions on adverse cardiovascular outcomes (clinical endpoints), not on any PK or PD parameter of trandolapril. |
| popPK | Meyer_1995 | irrelevant | 2 | 0 | This is a pharmacodynamic interaction study with warfarin; no PK disposition parameters for trandolapril are reported. |
| PD | Meyer_1995 | not_relevant | 3 | 2 | This is a drug-interaction bioequivalence-style comparison of warfarin PD (PT AUC ratios) with vs without trandolapril; no trandolapril exposure-response or dose-effect relationship or PD parameters (Emax/EC50 etc.) are reported or derivable. |
| PGx | Niu_2010 | not_relevant | 2 | 5 | The paper reports CACNB2 genotype associations with adverse cardiovascular outcomes by treatment strategy, not effects on any PK or PD parameter (e.g., AUC, clearance, BP response) of trandolapril. |
| PGx | Okumura_2001 | not_relevant | 4 | 3 | Study found no significant association between ACE genotype and cough or trandolapril/trandolaprilat concentrations; no pharmacogenomic effect on a PK/PD parameter is reported. |
| popPK | Othman_2007 | irrelevant | 0 | 0 | This is a population-PK study of carvedilol, not trandolapril; no trandolapril parameters are present. |
| PD | Othman_2007 | not_relevant | 0 | 0 | Paper reports only a population PK model for S-carvedilol; no PD or exposure-response data or parameters are presented. |
| popPK | Poirier_1993 | irrelevant | 1 | 0 | This is an antihypertensive efficacy trial with no pharmacokinetic parameters or numeric disposition values reported. |
| PD | Poirier_1993 | not_relevant | 2 | 1 | Crossover efficacy comparison of two dosing regimens with BP outcomes only; no concentration-effect or dose-response relationship or numeric PD parameters reported. |
| popPK | Scholze_1998 | irrelevant | 1 | 0 | This is an antihypertensive efficacy trial with no PK parameters (CL, V, ka, half-life, or PK model) reported for trandolapril. |
| popPK | Sica_2007 | irrelevant | 1 | 0 | This is a narrative supplement overview about calcium channel blockers with no trandolapril PK parameters or numeric values. |
| PD | Sica_2007 | not_relevant | 1 | 0 | This is only an editorial/overview of a supplement; no PD or exposure-response data for trandolapril with numeric parameters are presented. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | This is a drug-drug interaction prevalence study with no trandolapril PK parameters or any pharmacokinetic values present. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | Drug utilization/DDI prevalence study with no concentration- or dose-effect data or PD parameters for trandolapril. |
| popPK | Song_2002 | irrelevant | 3 | 0 | This is a narrative review of ACE inhibitors with no numeric PK parameters for trandolapril reported in the evidence. |
| PD | Song_2002 | not_relevant | 2 | 1 | Narrative review mentioning trandolapril's trough-to-peak ratio &gt;50% and flat ACE-inhibitor dose-response qualitatively, with no numeric PD parameters or effect-concentration data extractable. |
| PGx | Vandell_2012 | not_relevant | 0 | 0 | Trandolapril appears only in the INVEST study name; reported GRK4 effects concern atenolol BP response and treatment-independent cardiovascular outcomes, not trandolapril PK/PD. |
| popPK | Wang_2021 | relevant | 6 | 3 | A human single-dose PK study of trandolapril/trandolaprilat is described, but the evidence contains only summary percentages (Cmax, AUC changes); no numeric CL, V, or half-life values are present, and detailed parameters may be in figures/tables not provided. |
| popPK | Widimský_2000 | irrelevant | 1 | 0 | This is a clinical review of verapamil/trandolapril combination efficacy and safety with no pharmacokinetic parameters or numeric disposition values reported. |
| PD | Widimský_2000 | not_relevant | 1 | 0 | Narrative review summary with only qualitative dose-combination efficacy claims; no numeric PD parameters or concentration/dose-effect data for trandolapril are reported or derivable. |
| popPK | Wiseman_1994 | irrelevant | 3 | 1 | This is a narrative review of trandolapril's pharmacokinetics with no numeric PK parameter values present in the evidence. |
| PD | Wiseman_1994 | not_relevant | 2 | 1 | This is a qualitative narrative review of trandolapril's PD/PK properties and clinical efficacy; no numeric PD parameters (Emax, EC50, dose-effect curves) are stated or derivable from the abstract text. |
| popPK | Zannad_1993 | irrelevant | 2 | 1 | This is a narrative review comparing ACE inhibitors; no quantitative PK parameters (CL, V, ka, or model values) for trandolapril are reported, only qualitative statements and trough:peak ratios. |
| PD | Zannad_1993 | not_relevant | 2 | 1 | Narrative review with qualitative ACE-inhibition/duration claims and trough:peak ratios only; no concentration-effect or dose-response PD parameters (Emax, EC50, etc.) stated or derivable. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 23:53 UTC</sub>
