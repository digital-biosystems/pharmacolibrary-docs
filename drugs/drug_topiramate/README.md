<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;topiramate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topiramate_Lee2024_reference&quot;,&quot;label&quot;:&quot;Lee_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_topiramate/Topiramate_Lee2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# topiramate

- **generic name:** topiramate
- **ATC codes:** `A08AA51`, `N03AX11`
- **DrugBank:** [DB00273](https://go.drugbank.com/drugs/DB00273) · **PubChem:** [CID 5284627](https://pubchem.ncbi.nlm.nih.gov/compound/5284627)
- **molar mass:** 339.362 g/mol (C12H21NO8S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Topiramate is a anti-epileptic drug used to manage seizures and prevent migraines.[A175249] It was initially approved by the FDA in 1996. In 2004, topiramate was approved for the prevention of migraine in adults.[A188309,L10544,L43478] Since 2012, the extended-release formulation has been approved in combination with [phentermine] for chronic weight management therapy in adults.[L10550] 

Characteristics that distinguish topiramate from other antiepileptic drugs are a monosaccharide chemical structure containing a sulfamate, and 40% of its mass accounted for by oxygen.[A175249] Interestingly, topiramate was discovered by chance when attempts were made to formulate a novel antidiabetic drug.[A188330]

**Indication.** Topiramate is indicated  for the following conditions: 1)Monotherapy for partial onset or primary generalized tonic-clonic seizures for patients 2 years of age and above 2)Adjunctive therapy for partial onset seizures or primary generalized tonic-clonic seizures for both adult and pediatric patients above 2 years old 3)Adjunctive therapy for seizures associated with Lennox-Gastaut syndrome in patients above 2 years of age 4)Prophylaxis of migraine in children 12 years of age and older and adults.[L10544]

Topiramate is also used off-label as an adjunct therapy for weight management[L10550] and for mood disorders.[A188312]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| topiramate | parent | 339.362 | C12H21NO8S | DrugBank | [5284627](https://pubchem.ncbi.nlm.nih.gov/compound/5284627) | Elewa_2023, Lee_2024, Marques_2020, Wei_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 19:46 | 13:33 | 1/2/2 | 3/0/0 | 0/0/5 | 243,463/36,576 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 2/8 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.267). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Lee_2024_reference](drugs/drug_topiramate/Topiramate_Lee2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Lee S et al., Topiramate dosage optimization for effe…, Annals of clinical and tran… (2024) | [10.1002/acn3.51962](https://doi.org/10.1002/acn3.51962) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Elewa_2023_reference](drugs/drug_topiramate/Topiramate_Elewa2023_reference.md) | — | 1-compartment (no model) | 1 | Elewa M et al., Population Pharmacokinetics of Topirama…, Therapeutic drug monitoring (2023) | [10.1097/FTD.0000000000001143](https://doi.org/10.1097/FTD.0000000000001143) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q23 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Majid_2016_reference](drugs/drug_topiramate/Topiramate_Majid2016_reference.md) | — | 1-compartment (no model) | 2 | Majid O et al., Impact of perampanel on pharmacokinetic…, British journal of clinical… (2016) | [10.1111/bcp.12951](https://doi.org/10.1111/bcp.12951) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Marques_2020_reference](drugs/drug_topiramate/Topiramate_Marques2020_reference.md) | — | 1-compartment (no model) | 3 | Marques MR et al., Topiramate pharmacokinetics in neonates…, Acta paediatrica (Oslo, Nor… (2020) | [10.1111/apa.14944](https://doi.org/10.1111/apa.14944) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wei_2023_reference](drugs/drug_topiramate/Topiramate_Wei2023_reference.md) | — | 1-compartment (no model) | 0 | Wei S et al., Population pharmacokinetics of topirama…, European journal of clinica… (2023) | [10.1007/s00228-023-03549-6](https://doi.org/10.1007/s00228-023-03549-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ahmed_2015_COWA](drugs/drug_topiramate/pd_Ahmed_2015_COWA.md) | phonemic generative fluency scores as measured by the Controlled Oral Word Association (COWA) test ← topiramate · direct linear effect | — | Ahmed GF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2015) | [10.1111/bcp.12556](https://doi.org/10.1111/bcp.12556) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lim_2016_SDMT](drugs/drug_topiramate/pd_Lim_2016_SDMT.md) | Symbol-Digit Modalities Test score ← topiramate · direct Emax (saturable) effect | — | Lim CN et al., Pharmacokinetic-Pharmacodynamic Modelin…, Journal of clinical pharmac… (2016) | [10.1002/jcph.646](https://doi.org/10.1002/jcph.646) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sun_2007_persistent_Na_current](drugs/drug_topiramate/pd_Sun_2007_persistent_Na_current.md) | persistent Na(+) current ← topiramate · direct Emax (saturable) effect | — | Sun GC et al., Carbamazepine and topiramate modulation…, Epilepsia (2007) | [10.1111/j.1528-1167.2007.01001.x](https://doi.org/10.1111/j.1528-1167.2007.01001.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sun_2007_steady_state_inactivation_of_the_transient_Na_current](drugs/drug_topiramate/pd_Sun_2007_steady_state_inactivation_of_the_transient_Na_curre.md) | steady-state inactivation of the transient Na(+) current ← topiramate · direct Emax (saturable) effect | — | Sun GC et al., Carbamazepine and topiramate modulation…, Epilepsia (2007) | [10.1111/j.1528-1167.2007.01001.x](https://doi.org/10.1111/j.1528-1167.2007.01001.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **DPW_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_DPW_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GRIK1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_GRIK1_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PAU_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_PAU_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **THR_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_THR_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **TR_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_TR_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=topiramate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | kidney | <sub>“…mainly eliminated through the kidneys…”</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), CA3 (inhibitor), CA4 (inhibitor), CACNA1C (target), CACNA1E (target), DPW_PGS (target), GABRA1 (target), GRIK1 (target), PAU_PGS (target), PRKAA1 (inducer), SCN1A (inhibitor), THR_PGS (target), TR_PGS (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 171 matched, 62 returned
- **screened:** 11  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elewa_2023.pdf` | Elewa M et al., Population Pharmacokinetics of Topirama…, Therapeutic drug monitoring (2023) | popPK | 10 | [10.1097/FTD.0000000000001143](https://doi.org/10.1097/FTD.0000000000001143) | [37798835](https://pubmed.ncbi.nlm.nih.gov/37798835) | The study reports a population PK model for topiramate in humans with specific numeric values for mean clearance (2.11 L/h) and qualitative covariate effects on volume. |
| `Wei_2023.pdf` | Wei S et al., Population pharmacokinetics of topirama…, European journal of clinica… (2023) | popPK | 10 | [10.1007/s00228-023-03549-6](https://doi.org/10.1007/s00228-023-03549-6) | [37597080](https://pubmed.ncbi.nlm.nih.gov/37597080) | The paper reports a population pharmacokinetic model for topiramate in humans with explicit numeric formulas for clearance and volume of distribution. |
| `Ahmed_2015.pdf` | Ahmed GF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2015) | popPK | 9 | [10.1111/bcp.12556](https://doi.org/10.1111/bcp.12556) | [25403343](https://pubmed.ncbi.nlm.nih.gov/25403343) | The study is a population PK/PD modeling study for topiramate in humans, but the specific numeric PK parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| `Girgis_2010.pdf` | Girgis IG et al., Pharmacokinetic-pharmacodynamic assessm…, Epilepsia (2010) | popPK | 9 | [10.1111/j.1528-1167.2010.02598.x](https://doi.org/10.1111/j.1528-1167.2010.02598.x) | [20880232](https://pubmed.ncbi.nlm.nih.gov/20880232) | The paper describes a population PK model for topiramate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Lim_2016.pdf` | Lim CN et al., Pharmacokinetic-Pharmacodynamic Modelin…, Journal of clinical pharmac… (2016) | popPK | 8 | [10.1002/jcph.646](https://doi.org/10.1002/jcph.646) | [26395889](https://pubmed.ncbi.nlm.nih.gov/26395889) | The study is a PK-PD modeling study in humans that likely contains PK parameters, but the provided evidence only reports PD parameters (EC50, age effect) and does not list specific numeric PK values like CL or V. |
| `Falcão_2012.pdf` | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | pd | 5 | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) | [22171585](https://www.ncbi.nlm.nih.gov/pubmed/22171585) | metadata signals extractable PD data (exposure-response) |
| `Morgan_2004.pdf` | Morgan PE et al., Carbonic anhydrase inhibitors that dire…, Molecular membrane biology (2004) | pd | 5 | [10.1080/09687860400014872](https://doi.org/10.1080/09687860400014872) | [15764372](https://www.ncbi.nlm.nih.gov/pubmed/15764372) | metadata signals extractable PD data (EC50) |
| `Narayanasamy_2019.pdf` | Narayanasamy S et al., An alternating polarity switching assay…, Journal of chromatography.… (2019) | pd | 5 | [10.1016/j.jchromb.2019.04.044](https://doi.org/10.1016/j.jchromb.2019.04.044) | [31030106](https://www.ncbi.nlm.nih.gov/pubmed/31030106) | metadata signals extractable PD data (PK/PD) |
| `Wei_2024.pdf` | Wei S et al., UGT1A polymorphism rs4148324 associated…, Seizure (2024) | pgx | 8 | [10.1016/j.seizure.2023.10.004](https://doi.org/10.1016/j.seizure.2023.10.004) | [37858371](https://www.ncbi.nlm.nih.gov/pubmed/37858371) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Nallani_2003.pdf` | Nallani SC et al., Dose-dependent induction of cytochrome…, Epilepsia (2003) | pgx | 7 | [10.1111/j.0013-9580.2003.06203.x](https://doi.org/10.1111/j.0013-9580.2003.06203.x) | [14636322](https://www.ncbi.nlm.nih.gov/pubmed/14636322) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sachdeo_2002.pdf` | Sachdeo RC et al., Topiramate and phenytoin pharmacokineti…, Epilepsia (2002) | pgx | 7 | [10.1046/j.1528-1157.2002.41701.x](https://doi.org/10.1046/j.1528-1157.2002.41701.x) | [12102670](https://www.ncbi.nlm.nih.gov/pubmed/12102670) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Stöllberger_2016.pdf` | Stöllberger C et al., Interactions between non-vitamin K oral…, Epilepsy research (2016) | pgx | 7 | [10.1016/j.eplepsyres.2016.06.003](https://doi.org/10.1016/j.eplepsyres.2016.06.003) | [27450623](https://www.ncbi.nlm.nih.gov/pubmed/27450623) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Atasayar_2016.pdf` | Atasayar G et al., Association of MDR1, CYP2D6, and CYP2C1…, Journal of the neurological… (2016) | pgx | 5 | [10.1016/j.jns.2016.05.019](https://doi.org/10.1016/j.jns.2016.05.019) | [27288795](https://www.ncbi.nlm.nih.gov/pubmed/27288795) | metadata signals extractable PGX data (CYP2D6) |
| `Jogamoto_2017.pdf` | Jogamoto T et al., Add-on stiripentol elevates serum valpr…, Epilepsy research (2017) | pgx | 5 | [10.1016/j.eplepsyres.2016.12.014](https://doi.org/10.1016/j.eplepsyres.2016.12.014) | [28081475](https://www.ncbi.nlm.nih.gov/pubmed/28081475) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-01T19:35:00.985980+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2015 | relevant | 9 | 2 | The study is a population PK/PD modeling study for topiramate in humans, but the specific numeric PK parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| PGx | Belcastro_2010 | not_relevant | 0 | 0 | The study investigates the effect of topiramate on homocysteine levels and mentions MTHFR polymorphisms, but it does not report how a gene variant changes the pharmacokinetic or pharmacodynamic parameters of topiramate itself. |
| popPK | Citraro_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic interaction study in mice where topiramate is a co-administered comparator, and no quantitative PK parameters (CL, V, etc.) for topiramate are reported. |
| PD | Citraro_2016 | not_relevant | 1 | 0 | The paper reports qualitative potentiation of topiramate's anticonvulsant effect by cannabinoid agonists and confirms it is pharmacodynamic (no PK change), but it does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative exposure-response curves for topiramate. |
| popPK | Falcão_2012 | irrelevant | 0 | 0 | no_text gate: only 216 chars of text extracted (&lt; 400) |
| PD | Falcão_2012 | not_relevant | 0 | 0 | The paper focuses on eslicarbazepine acetate, not topiramate. |
| popPK | Girgis_2010 | relevant | 9 | 0 | The paper describes a population PK model for topiramate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PD | Girgis_2010 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to verify the presence of numeric pharmacodynamic parameters or exposure-response relationships. |
| PGx | Guzman_2014 | not_relevant | 0 | 0 | The text is a general review introduction summarizing the field of pharmacogenetics for obesity drugs and does not report specific gene-variant effects on topiramate PK/PD parameters. |
| popPK | Honybun_2026 | irrelevant | 0 | 0 | The study reports neurocognitive outcomes (IQ scores) in children, not pharmacokinetic parameters for topiramate. |
| PGx | Jaisupa_2025 | not_relevant | 0 | 0 | The study investigates the effect of CYP2C19 genotype on Cannabidiol (CBD) metabolism, not topiramate. |
| PGx | Jogamoto_2017 | not_relevant | 2 | 5 | The paper reports a pharmacogenomic effect (CYP2C19) on the PK of valproate, not topiramate. |
| popPK | Klein_2026 | irrelevant | 0 | 0 | The study is a clinical trial analyzing psychotherapy outcomes (PTSD/AUD symptoms) and does not report any pharmacokinetic parameters for topiramate. |
| PGx | Kotake_2025 | not_relevant | 0 | 0 | The paper reports on pharmacodynamic outcomes (alcohol consumption) rather than pharmacokinetic parameters, and concludes there is insufficient evidence to confirm a pharmacogenetic effect. |
| PGx | Kranzler_2016 | not_relevant | 2 | 5 | The paper reports a pharmacogenomic effect on a behavioral outcome (drinking) and a psychological mediator (self-efficacy), not on a pharmacokinetic (PK) or pharmacodynamic (PD) parameter of topiramate itself. |
| PGx | Kranzler_2018 | not_relevant | 0 | 0 | The paper is a general review of alcohol use disorder treatment and explicitly states there is insufficient evidence for pharmacogenetics in this context, without reporting specific PK/PD effects of topiramate. |
| PGx | Kranzler_2021 | not_relevant | 0 | 0 | The paper reports a non-significant pharmacogenomic effect on clinical outcomes (drinking behavior), not on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Kranzler_2025 | not_relevant | 2 | 8 | The paper reports pharmacogenomic moderation of clinical efficacy (PD outcomes like heavy drinking days), not pharmacokinetic parameters or direct drug-response PD parameters. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The study is a preclinical pharmacodynamic and neurochemical investigation in mice where topiramate is used only as a test drug to assess resistance, with no quantitative pharmacokinetic parameters (CL, V, etc.) reported for it. |
| PD | Kumar_2020 | not_relevant | 1 | 0 | The paper reports a binary resistance response to a single fixed dose of topiramate (300 mg/kg) in an animal model, without providing concentration-effect data, dose-response curves, or numeric PD parameters. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The paper is a computational drug repositioning study for Alzheimer's disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of topiramate. |
| popPK | Lim_2016 | relevant | 8 | 2 | The study is a PK-PD modeling study in humans that likely contains PK parameters, but the provided evidence only reports PD parameters (EC50, age effect) and does not list specific numeric PK values like CL or V. |
| PGx | Lin_2019 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of oxcarbazepine (MHD), not topiramate, and reports that topiramate co-administration did not significantly influence MHD clearance. |
| PGx | Louveau_2023 | not_relevant | 4 | 5 | The paper reports differences in clinical treatment response (efficacy/tolerability) based on genetic subtype, but does not report specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, receptor binding). |
| PGx | Majid_2016 | not_relevant | 0 | 0 | The paper investigates the impact of perampanel on the pharmacokinetics of concomitant antiepileptics (including topiramate) but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| popPK | Methaneethorn_2022 | irrelevant | 2 | 0 | The study is a simulation using parameters from other published models and does not report original quantitative PK parameter values for topiramate in the evidence provided. |
| popPK | Morgan_2004 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Morgan_2004 | not_relevant | 0 | 0 | The paper focuses on the mechanism of carbonic anhydrase inhibitors on the AE1 exchanger and does not report pharmacokinetic or pharmacodynamic modeling or exposure-response relationships for topiramate. |
| PGx | Morley_2018 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial and does not report results or fitted effect sizes for pharmacokinetic or pharmacodynamic parameters. |
| PGx | Morley_2024 | not_relevant | 0 | 0 | The study reports that the examined polymorphisms had no effect on treatment response, and the outcomes measured were clinical efficacy endpoints (drinking days, BMI) rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | Nakashima_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of valproic acid (VPA), with topiramate mentioned only as a co-administered covariate in the VPA model. |
| PD | Nakashima_2015 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for valproic acid (VPA), not topiramate; topiramate is only mentioned as a covariate in the VPA model. |
| PGx | Nakashima_2015 | not_relevant | 0 | 0 | The study focuses on the pharmacogenomics of valproic acid (VPA), not topiramate; topiramate is only mentioned as a co-administered covariate. |
| PGx | Nallani_2003 | not_relevant | 0 | 0 | The paper investigates the mechanism of topiramate-induced CYP3A4 induction in vitro but does not report any pharmacogenomic effects (gene variants) on topiramate's PK or PD parameters. |
| popPK | Narayanasamy_2019 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Narayanasamy_2019 | not_relevant | 0 | 0 | The paper describes an analytical method (LC-MS/MS) for quantifying topiramate and oxycodone, not a pharmacodynamic or exposure-response analysis. |
| PGx | Perucca_2008 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of rufinamide and its drug-drug interactions, reporting no pharmacogenomic effects on topiramate. |
| PGx | Pisano_2015 | not_relevant | 0 | 0 | The paper reports clinical efficacy (seizure control) of topiramate in KCNQ2 encephalopathy but does not report pharmacokinetic or pharmacodynamic parameter changes linked to genotype. |
| PGx | Sabers_2008 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antiepileptics and contraceptives, not pharmacogenomic effects of gene variants on topiramate PK/PD. |
| PGx | Sachdeo_2002 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between topiramate and phenytoin, not the effect of genetic variants on pharmacokinetics. |
| PGx | Sakamoto_2017 | not_relevant | 0 | 0 | The paper reports a clinical case of therapeutic response to topiramate in a patient with a GNAO1 mutation, but it does not report pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, receptor binding) or a quantitative pharmacogenomic effect size. |
| PGx | Sarayani_2023 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between topiramate and oral contraceptives, not a pharmacogenomic effect. |
| PGx | Shinn_2010 | not_relevant | 0 | 0 | The paper is a clinical review of topiramate's efficacy in substance-related disorders and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Soyka_2015 | not_relevant | 0 | 0 | The paper is a narrative review of alcoholism pharmacotherapy that mentions topiramate and pharmacogenetics generally, but does not report specific gene-variant effects on topiramate PK or PD parameters. |
| PGx | Stöllberger_2016 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between NOACs and AEDs, not pharmacogenomic effects of gene variants on topiramate PK/PD. |
| popPK | Sun_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of sodium channel modulation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Tompson_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of retigabine, with topiramate serving only as a co-administered comparator agent. |
| popPK | Vashi_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cenobamate, with topiramate mentioned only as a co-administered drug that did not significantly affect cenobamate's disposition. |
| PGx | Yorns_2013 | not_relevant | 0 | 0 | The paper discusses the relationship between mitochondrial dysfunction and migraine, mentioning topiramate only as a therapeutic agent, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | van_2018 | relevant | 8 | 2 | The paper is a supplement to a PK study that includes a topiramate model with numeric parameters, but the specific theta values for topiramate are not explicitly listed in the provided text excerpt (only models for other drugs like CBZ, CLB, CLNZ, LMT, LVT, OXC, PHB are fully detailed with numbers). |
| PGx | Łukawski_2021 | not_relevant | 0 | 0 | The paper is a general review of mechanisms of drug resistance in epilepsy and does not report specific pharmacogenomic effects on topiramate PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-01 19:35 UTC</sub>
