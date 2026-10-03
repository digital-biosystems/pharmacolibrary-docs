<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;captopril&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Captopril_Hu2025_reference&quot;,&quot;label&quot;:&quot;Hu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_captopril/Captopril_Hu2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# captopril

- **generic name:** captopril
- **ATC codes:** `C09AA01`, `C09BA01`
- **DrugBank:** [DB01197](https://go.drugbank.com/drugs/DB01197) · **PubChem:** [CID 44093](https://pubchem.ncbi.nlm.nih.gov/compound/44093)
- **molar mass:** 217.285 g/mol (C9H15NO3S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Captopril is a potent, competitive inhibitor of angiotensin-converting enzyme (ACE), the enzyme responsible for the conversion of angiotensin I (ATI) to angiotensin II (ATII). ATII regulates blood pressure and is a key component of the renin-angiotensin-aldosterone system (RAAS). Captopril may be used in the treatment of hypertension.

**Indication.** For the treatment of essential or renovascular hypertension (usually administered with other drugs, particularly thiazide diuretics). May be used to treat congestive heart failure in combination with other drugs (e.g. cardiac glycosides, diuretics, &beta;-adrenergic blockers). May improve survival in patients with left ventricular dysfunction following myocardial infarction. May be used to treat nephropathy, including diabetic nephropathy.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| captopril | parent | 217.285 | C9H15NO3S | DrugBank | [44093](https://pubchem.ncbi.nlm.nih.gov/compound/44093) | Duchin_1982, Kiriyama_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 22:59 | 4:08 | 1/0/5 | 1/0/0 | 1/0/1 | 200,874/19,518 | ollama / glm-5.3-flash | 42 | 20/21 | 22/20 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Hu_2025_reference](drugs/drug_captopril/Captopril_Hu2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hu L et al., A Systematic Review of Population Pharm…, Drug design, development an… (2025) | [10.2147/DDDT.S553073](https://doi.org/10.2147/DDDT.S553073) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.211). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Duchin_1982_intravenous_dose_total_radioactivity](drugs/drug_captopril/Captopril_Duchin1982_intravenous_dose_total_radioactivity.md) | — | 1-compartment (no model) | 4 | Duchin KL et al., Captopril kinetics, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.59](https://doi.org/10.1038/clpt.1982.59) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.211). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Duchin_1982_intravenous_dose_unchanged_captopril](drugs/drug_captopril/Captopril_Duchin1982_intravenous_dose_unchanged_captopril.md) | — | 1-compartment (no model) | 4 | Duchin KL et al., Captopril kinetics, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.59](https://doi.org/10.1038/clpt.1982.59) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.19). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Duchin_1982_oral_dose_total_radioactivity](drugs/drug_captopril/Captopril_Duchin1982_oral_dose_total_radioactivity.md) | — | 1-compartment (no model) | 6 | Duchin KL et al., Captopril kinetics, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.59](https://doi.org/10.1038/clpt.1982.59) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.19). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Duchin_1982_oral_dose_unchanged_captopril](drugs/drug_captopril/Captopril_Duchin1982_oral_dose_unchanged_captopril.md) | — | 1-compartment (no model) | 6 | Duchin KL et al., Captopril kinetics, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.59](https://doi.org/10.1038/clpt.1982.59) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61, Q47, Q301, Q302, Q88, Q57, Q22…</sub><br><sub>route_to: `human_review`</sub> | [Kiriyama_2024_reference](drugs/drug_captopril/Captopril_Kiriyama2024_reference.md) | — | 1-compartment (no model) | 9 | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.541). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_BP](drugs/drug_captopril/pd_Kiriyama_2024_BP.md) | blood pressure ← nifedipine and captopril (parent plasma concentrations; no metabolite driver) · indirect response — drug inhibits the production of blood pressure | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.541). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_HR](drugs/drug_captopril/pd_Kiriyama_2024_HR.md) | heart rate ← nifedipine and captopril (parent plasma concentrations; no metabolite driver) · indirect response — drug inhibits the production of heart rate | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.541). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_QT](drugs/drug_captopril/pd_Kiriyama_2024_QT.md) | QT interval ← nifedipine and captopril (parent plasma concentrations; no metabolite driver) · indirect response — drug inhibits the production of QT interval | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Kubo_2017](drugs/drug_captopril/pgx_Kubo_2017_CYP2C9_safety.md) | Kubo K et al., Population differences in S-warfarin ph…, The pharmacogenomics journal (2017) | [10.1038/tpj.2016.57](https://doi.org/10.1038/tpj.2016.57) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **VKORC1** | `Q34` · Css | target | [Kubo_2017](drugs/drug_captopril/pgx_Kubo_2017_VKORC1_Q34.md) | Kubo K et al., Population differences in S-warfarin ph…, The pharmacogenomics journal (2017) | [10.1038/tpj.2016.57](https://doi.org/10.1038/tpj.2016.57) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=captopril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `SLC15A1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | liver | `CYP2C9` safety_allele | paper PGx gene |
| excretion | kidney | `SLC22A6` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor), BDKRB1 (activator), LTA4H (inhibitor), MMP2 (inhibitor), MMP9 (inhibitor), VKORC1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1163 matched, 82 returned
- **screened:** 40  ·  **relevant:** 2
- **records:** 6  ·  extracted 1  ·  needs_review 5  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Evans_1984.pdf` | Evans MA et al., Pharmacokinetic and pharmacodynamic mod…, European journal of clinica… (1984) | pd | 5 | [10.1007/BF00630293](https://doi.org/10.1007/BF00630293) | [6723764](https://www.ncbi.nlm.nih.gov/pubmed/6723764) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Garrett_2023.pdf` | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | pd | 5 | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) | [37553873](https://www.ncbi.nlm.nih.gov/pubmed/37553873) | metadata signals extractable PD data (exposure-response) |
| `Hsyu_2013.pdf` | Hsyu PH et al., Pharmacokinetic-pharmacodynamic relatio…, Cancer chemotherapy and pha… (2013) | pd | 5 | [10.1007/s00280-012-1998-4](https://doi.org/10.1007/s00280-012-1998-4) | [23070145](https://www.ncbi.nlm.nih.gov/pubmed/23070145) | metadata signals extractable PD data (exposure-response) |
| `Penttilä_2001.pdf` | Penttilä J et al., Pharmacokinetic-pharmacodynamic model f…, European journal of clinica… (2001) | pd | 5 | [10.1007/s002280100288](https://doi.org/10.1007/s002280100288) | [11417448](https://www.ncbi.nlm.nih.gov/pubmed/11417448) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Weinshilboum_1984.pdf` | Weinshilboum RM, Human pharmacogenetics of methyl conjug…, Federation proceedings (1984) | pgx | 5 | not captured | [6714437](https://www.ncbi.nlm.nih.gov/pubmed/6714437) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-09-30T22:31:47.193483+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alexander_2024 | not_relevant | 0 | 0 | Paper studies ketogenic diet, β-hydroxybutyrate, and gut microbiota effects on EAE/autoimmunity; no mention of captopril or any pharmacogenomic effect on its PK/PD parameters. |
| PGx | Brogden_1995 | not_relevant | 0 | 0 | Text is a reference list about streptokinase/thrombolytic therapy with no captopril content and no gene-variant effects on PK/PD parameters. |
| PGx | Cabib_1991 | not_relevant | 0 | 0 | The paper studies apomorphine and stress effects in mice, not captopril, and no gene variant/genotype effect on captopril PK/PD is reported. |
| PGx | Camici_2024 | not_relevant | 0 | 0 | Paper concerns rapid ART with BIC/FTC/TAF in advanced HIV; no pharmacogenomic effect on captopril PK/PD reported. |
| PGx | Chen_2026 | not_relevant | 0 | 0 | Paper describes genome editing pipeline in mice; no captopril or PK/PD pharmacogenomic data. |
| PGx | Clark_2024 | not_relevant | 0 | 0 | The paper studies SARS-CoV-2 mRNA vaccine-elicited antibodies and viral protection; it does not involve captopril or any pharmacogenomic effect on PK/PD parameters. |
| popPK | Dahaba_2020 | irrelevant | 0 | 0 | This is a population PK/PD study of propofol, not captopril; no captopril parameters are reported. |
| popPK | Dahaba_2022 | irrelevant | 0 | 0 | The paper is a PopPK/PD study of propofol and cisatracurium; captopril is never mentioned and no captopril parameters are present. |
| PGx | Dangi_2023 | not_relevant | 0 | 0 | The paper studies pre-existing immunity effects on mRNA COVID-19 vaccine immunogenicity; it contains no data on captopril or any gene variant affecting its PK/PD parameters. |
| PGx | Das_2026 | not_relevant | 0 | 0 | Paper concerns S. aureus biofilm effects on macrophage efferocytosis; no captopril or pharmacogenomic PK/PD data. |
| popPK | Eaton_2022 | irrelevant | 0 | 0 | The study reports quantitative PK parameters for dabigatran in rabbits, not captopril. |
| PD | Eaton_2022 | not_relevant | 0 | 0 | The paper reports a full population PK/PD (sigmoid Emax, effect-compartment) model with numeric PD parameters, but for dabigatran, not captopril, so it provides no captopril exposure-response relationship. |
| popPK | Evans_1984 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic parameters for pancuronium, not captopril; captopril is not mentioned at all. |
| PD | Evans_1984 | not_relevant | 0 | 0 | The paper reports a PK/PD model with numeric EC50 parameters, but for pancuronium, not captopril, so no captopril PD relationship is present. |
| popPK | Figueiredo_2020 | irrelevant | 0 | 0 | This is a rehabilitation trial of Hand-Arm Bimanual Intensive Therapy in children with cerebral palsy, with no pharmacokinetic data or captopril parameters of any kind. |
| PGx | Gallichotte_2022 | not_relevant | 0 | 0 | Paper concerns dengue vaccine antibodies and protection, not captopril pharmacogenomics. |
| popPK | Garrett_2023 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| PD | Garrett_2023 | not_relevant | 0 | 0 | The paper models exposure-response for bosutinib in CML, not captopril, so no captopril PD relationship or parameters are reported. |
| popPK | Han_2025 | irrelevant | 0 | 0 | This is a clinical study of pancreatic endotherapy and quality of life in chronic pancreatitis with no pharmacokinetic data or captopril content whatsoever. |
| PGx | Hoch_2026 | not_relevant | 0 | 0 | The paper examines a drug-drug interaction (phenytoin induction of CYP3A4) on asciminib PK, not a gene variant/genotype/phenotype effect, and captopril is not studied. |
| popPK | Hsyu_2013 | irrelevant | 0 | 0 | This is a population PK/PD analysis of bosutinib in CML patients; captopril is not the subject drug and no captopril parameters appear. |
| PD | Hsyu_2013 | not_relevant | 0 | 0 | The paper reports exposure-response analyses for bosutinib, not captopril, so no captopril PD relationship or parameters are present. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | This is a systematic review of voriconazole population pharmacokinetics in Asian patients with liver dysfunction; captopril is never mentioned and no captopril parameters appear anywhere in the evidence. |
| PGx | Hu_2025 | not_relevant | 0 | 0 | The paper concerns voriconazole, not captopril, so no pharmacogenomic effect on captopril PK/PD parameters is reported. |
| PGx | Jamaluddin_2026 | not_relevant | 0 | 0 | Paper studies MRAP2 GPCR signaling variants, not captopril pharmacogenomics on PK/PD parameters. |
| popPK | Killerby_2022 | irrelevant | 0 | 0 | This is a meta-analysis on hay preservation with no pharmacokinetic data or captopril parameters of any kind. |
| PGx | Kubo_2017 | not_relevant | 0 | 0 | The paper concerns S-warfarin pharmacokinetics (CYP2C9, VKORC1 effects on CL(S)), not captopril. |
| PGx | Kurata_2022 | not_relevant | 0 | 0 | Study reports liver disease severity (Child-Pugh/MELD) effects on theophylline clearance, not a gene variant/genotype/phenotype effect. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | Paper describes light-driven NADPH regeneration for P450 BM3-catalyzed O-dealkylation in vitro; no gene variant/genotype effect on captopril PK/PD is reported. |
| PGx | Lee_2025 | not_relevant | 0 | 0 | Paper concerns CYP2B6 regulation in glioblastoma cells; captopril is not studied and no PK/PD parameter is reported. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a toxicology study of cyclophosphamide in zebrafish; captopril is not mentioned and no PK parameters for any drug are reported. |
| PD | Li_2022 | not_relevant | 0 | 0 | The paper concerns cyclophosphamide toxicity in zebrafish, not captopril; no captopril exposure-response data or PD parameters are present. |
| PGx | Liberti_2016 | not_relevant | 3 | 3 | Reports viral Q80K polymorphism prevalence affecting simeprevir efficacy, not a host gene variant effect on a PK/PD parameter of captopril. |
| PGx | Lieberman_2001 | not_relevant | 0 | 0 | The paper discusses prostate cancer chemoprevention trial strategy and mentions captopril nowhere; no gene variant effect on any PK/PD parameter is reported. |
| PGx | Lundström_1989 | not_relevant | 0 | 0 | The paper studies the halothane (Hal) gene effect on pig muscle metabolism and meat quality; captopril is not mentioned and no PK/PD parameters of any drug are reported. |
| PGx | Manjón_2023 | not_relevant | 0 | 0 | Paper concerns Taxol resistance via ABCB1 derepression in cell culture, not captopril PK/PD pharmacogenomics. |
| PGx | Marette_1993 | not_relevant | 0 | 0 | The paper studies norepinephrine/insulin effects on glucose transport in brown adipocytes of obese rat strains; captopril is never mentioned, so no pharmacogenomic effect on captopril PK/PD is reported. |
| PGx | Merz_2024 | not_relevant | 0 | 0 | The paper concerns ONECUT1 regulatory variants in pancreatic development and diabetes; captopril and any PK/PD pharmacogenomic effects are not mentioned. |
| PGx | Nademanee_1995 | not_relevant | 0 | 0 | Paper concerns HLA matching and GVHD prophylaxis in bone marrow transplantation; no captopril or pharmacogenomic PK/PD data. |
| PGx | Nagai_2015 | not_relevant | 0 | 0 | The paper concerns warfarin pharmacokinetics (CYP2C9*8 effect on S-warfarin clearance), not captopril, so no pharmacogenomic effect on captopril PK/PD is reported. |
| PGx | Ohara_2014 | not_relevant | 0 | 0 | The paper concerns warfarin PK-PD and genetic effects (CYP2C9, VKORC1, CYP4F2), not captopril. |
| PGx | Omar_2022 | not_relevant | 0 | 0 | The paper studies PKAc variants in Cushing's syndrome and cortisol/corticosterone signaling; captopril is never mentioned and no PK/PD parameters of captopril are reported. |
| PGx | Ozbey_2024 | not_relevant | 0 | 0 | Paper concerns PBPK modeling of midazolam glucuronidation in liver cirrhosis; no captopril and no gene variant/genotype effects on PK/PD are reported. |
| PGx | Patange_2025 | not_relevant | 0 | 0 | The paper studies C. elegans sulfur metabolism and H2S interactions with Actinobacteria; captopril is never mentioned and no pharmacokinetic or pharmacodynamic parameters are reported. |
| popPK | Patcas_2022 | irrelevant | 0 | 0 | This is a craniofacial growth modeling study (SITAR) with no pharmacokinetic parameters or captopril data whatsoever. |
| popPK | Penttilä_2001 | irrelevant | 0 | 0 | The study is a PK-PD model of glycopyrrolate in humans; captopril is not mentioned and no captopril parameters are reported. |
| PD | Penttilä_2001 | not_relevant | 0 | 0 | The paper models glycopyrrolate's anticholinergic effect (EC50, gamma, t1/2ke0), not captopril, so no captopril PD relationship is reported. |
| PGx | Pesti_1994 | not_relevant | 0 | 0 | The paper concerns chicken genotypes and plasma amino acid responses to diets; it does not involve captopril or any pharmacokinetic/pharmacodynamic parameter. |
| PGx | Potzel_2026 | not_relevant | 0 | 0 | The paper concerns OATP1B1 (SLCO1B1) genotype and coproporphyrin biomarker levels with drugs like atorvastatin, ezetimibe, semaglutide, and metformin; captopril is not studied or mentioned. |
| PGx | Prahl_2023 | not_relevant | 0 | 0 | Study of urea/uric acid transporters in dairy cows; no drug, no captopril, no pharmacogenomic PK/PD effect. |
| PGx | Price_1989 | not_relevant | 3 | 2 | The paper describes genetic inheritance of erythrocyte TMT enzyme activity (which metabolizes captopril) but reports no effect of genotype on any captopril PK or PD parameter itself. |
| PGx | Pukhalsky_1990 | not_relevant | 0 | 0 | The paper concerns cyclophosphamide pharmacokinetics in mice, not captopril, so no pharmacogenomic effect on captopril PK/PD parameters is reported. |
| PGx | Ramirez-Valdez_2023 | not_relevant | 0 | 0 | The paper studies cancer vaccination strategies in mice; no gene variant/genotype effect on captopril PK/PD parameters is reported. |
| PGx | Robey_2024 | not_relevant | 0 | 0 | Captopril is only mentioned as a substrate of METTL7B methylation; no gene variant/genotype effect on captopril PK/PD parameters is reported. |
| PGx | Rodrigues_2011 | not_relevant | 0 | 0 | Paper studies mycobacteria-induced anaemia and iron metabolism genes in mice; no captopril PK/PD pharmacogenomic data. |
| PGx | Rother_2023 | not_relevant | 0 | 0 | Paper studies sphingolipid metabolism and trained immunity; no captopril or PK/PD pharmacogenomic effects reported. |
| PGx | Russell_1991 | not_relevant | 0 | 0 | Paper studies catecholamine metabolism and myocardial lesions in JCR:LA-cp rats; captopril is not mentioned and no pharmacogenomic PK/PD effect is reported. |
| PGx | Shulkes_1987 | not_relevant | 1 | 1 | Captopril is used as an experimental tool to study neurotensin clearance in rats; no gene variant/genotype/phenotype effect on captopril PK or PD is reported. |
| PGx | Siddoway_1987 | not_relevant | 0 | 0 | The paper studies propafenone and debrisoquine phenotype; captopril is not investigated. |
| popPK | Singh_2023 | irrelevant | 0 | 0 | The paper characterizes the endocannabinoid sensor GRABeCB2.0 in HEK293 cells; captopril is never mentioned and no PK disposition parameters for any drug are reported. |
| PD | Singh_2023 | not_relevant | 0 | 0 | The paper characterizes the endocannabinoid sensor GRABeCB2.0 (EC50/IC50 for eCBs, THC, CBD) and contains no captopril data whatsoever. |
| popPK | Singh_2024 | irrelevant | 0 | 0 | This is an in-vitro pharmacological characterization of an endocannabinoid fluorescent sensor in HEK293 cells; captopril is not mentioned and no PK parameters exist. |
| PD | Singh_2024 | not_relevant | 0 | 0 | The paper characterizes EC50/IC50 values of endocannabinoids and cannabinoids at the GRABeCB2.0 fluorescent sensor in vitro; captopril is not studied and no drug exposure-response or PK/PD relationship is reported. |
| PGx | Sulbarán_1994 | not_relevant | 0 | 0 | No gene/genotype/phenotype variables studied; only BMI, age, and initial BP correlated with captopril BP response. |
| PGx | Sun_2026 | not_relevant | 0 | 0 | Paper concerns oral microbiota predicting COVID-19 severity; no gene variants or captopril PK/PD data. |
| PGx | Tan_2025 | not_relevant | 0 | 0 | Paper concerns cadmium accumulation in rice via UCL23, not captopril pharmacokinetics/pharmacodynamics. |
| PGx | Timm_2005 | not_relevant | 0 | 0 | The paper concerns cyclophosphamide pharmacokinetics and CYP2C19 genotype, not captopril. |
| PGx | Toni_2024 | not_relevant | 0 | 0 | Text is only a search strategy appendix; no pharmacogenomic PK/PD data on captopril. |
| PGx | Tran_2025 | not_relevant | 0 | 0 | CKD genetics study with no captopril or any drug PK/PD pharmacogenomic data. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | Paper describes a drug delivery system for cisplatin resistance; no gene variant/genotype effect on captopril PK/PD is reported. |
| PGx | Weagley_2022 | not_relevant | 0 | 0 | The paper studies gut microbial TIR-domain NADase activity and NAD metabolites in malnutrition; captopril and any pharmacokinetic/pharmacodynamic parameters are not mentioned. |
| PGx | Weinshilboum_1984 | not_relevant | 2 | 2 | TMT is noted to methylate captopril and TMT activity is heritable, but no variant effect on captopril PK/PD parameters is reported. |
| PGx | Woodside_1984 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (captopril pretreatment reducing sodium nitroprusside dose requirements), with no gene variant, genotype, or pharmacogenomic phenotype involved. |
| PGx | Work_2024 | not_relevant | 0 | 0 | The paper studies CYP3A inhibitors (CYP3cide, clobetasol, azamulin) and CYP3A isoform selectivity; captopril and any genetic effect on its PK/PD are not mentioned. |
| PGx | Xu_2023 | not_relevant | 0 | 0 | Study of Beclin1 autophagy variants on cytokine inflammation in mice; no drug (captopril) or PK/PD parameters involved. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper concerns the antiviral NZ-804 for SARS-CoV-2; captopril is not mentioned and no PK parameters for captopril appear in the evidence. |
| PD | Zhou_2024 | not_relevant | 0 | 0 | The paper concerns NZ-804 (a SARS-CoV-2 Mpro inhibitor), not captopril, and contains no captopril exposure- or dose-response PD analysis or parameters. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | This is a longitudinal MRI study of glymphatic changes during breast cancer chemotherapy; captopril is not mentioned and no pharmacokinetic parameters appear. |
| PGx | Zhou_2025_2 | not_relevant | 3 | 5 | Reports gene associations with severe hematologic adverse events of imatinib, not a PK/PD parameter, and concerns imatinib not captopril. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 22:31 UTC</sub>
