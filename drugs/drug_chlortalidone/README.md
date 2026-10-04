<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;chlortalidone&quot;}]"></div>

# chlortalidone

- **generic name:** chlortalidone
- **ATC codes:** `C03BA04`, `C03BB04`, `C03EA06`
- **DrugBank:** [DB00310](https://go.drugbank.com/drugs/DB00310) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Chlorthalidone is a thiazide-like diuretic used for the treatment of hypertension and for management of edema caused by conditions such as heart failure or renal impairment. Chlorthalidone improves blood pressure and swelling by preventing water absorption from the kidneys through inhibition of the Na+/Cl− symporter in the distal convoluted tubule cells in the kidney. The exact mechanism of chlorthalidone's anti-hypertensive effect is under debate, however, it is thought that increased diuresis results in decreased plasma and extracellular fluid volume, decreased cardiac output and therefore overall reduction in blood pressure.[A176324]

Chlorthalidone is considered first-line therapy for management of uncomplicated hypertension as there is strong evidence from meta-analyses that thiazide diuretics such as chlorthalidone reduce the risk of stroke, myocardial infarction, heart failure, and cardiovascular all-cause mortality in patients with hypertension.[A173863] In particular, the ALLHAT trial confirmed the role of thiazide diuretics as first-line therapy and demonstrated that chlorthalidone had a statistically significant lower incidence of stroke and heart failure when compared to [DB00722], [DB00381], or [DB00590].[A173884, A173887] Further studies have indicated that low-dose thiazides are as good as, and in some secondary endpoints, better than β-blockers, ACE inhibitors, Calcium Channel Blockers or ARBs.

Chlorthalidone has been shown to have a number of pleiotropic effects that differentiate it from other diuretics such as [DB00999]. In addition to its antihypertensive effects, chlorthalidone has also been shown to decrease platelet aggregation and vascular permeability, as well as promote angiogenesis in vitro, which is thought to be partly the result of reductions in carbonic anhydrase–dependent pathways. These pathways may play a role in chlorthalidone's cardiovascular risk reduction effects.[A176330]

**Indication.** Chlorthalidone is indicated in the management of hypertension either as the sole therapeutic agent or to enhance the effect of other antihypertensive drugs in the more severe forms of hypertension.

Chlorthalidone is indicated as adjunctive therapy in edema associated with congestive heart failure, hepatic cirrhosis, and corticosteroid and estrogen therapy.

Chlorthalidone has also been found useful in edema due to various forms of renal dysfunction, such as nephrotic syndrome, acute glomerulonephritis, and chronic renal failure.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlortalidone (chlorthalidone) | parent | 338.762 | C14H11ClN2O4S | PubChem | [2732](https://pubchem.ncbi.nlm.nih.gov/compound/2732) | Fleuren_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 07:25 | 2:47 | 0/1/0 | 0/0/0 | 0/0/3 | 38,474/8,823 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Fleuren_1979_reference](drugs/drug_chlortalidone/Chlortalidone_Fleuren1979_reference.md) | — | 1-compartment (no model) | 3 | Fleuren HL et al., Absolute bioavailability of chlorthalid…, European journal of clinica… (1979) | [10.1007/BF00563556](https://doi.org/10.1007/BF00563556) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **DUSP1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sá_2018](drugs/drug_chlortalidone/pgx_S_2018_DUSP1_Q100.md) | Sá ACC et al., Blood pressure signature genes and bloo…, BMC medical genomics (2018) | [10.1186/s12920-018-0370-x](https://doi.org/10.1186/s12920-018-0370-x) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **FOS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sá_2018](drugs/drug_chlortalidone/pgx_S_2018_FOS_Q100.md) | Sá ACC et al., Blood pressure signature genes and bloo…, BMC medical genomics (2018) | [10.1186/s12920-018-0370-x](https://doi.org/10.1186/s12920-018-0370-x) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **PPP1R15A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sá_2018](drugs/drug_chlortalidone/pgx_S_2018_PPP1R15A_Q100.md) | Sá ACC et al., Blood pressure signature genes and bloo…, BMC medical genomics (2018) | [10.1186/s12920-018-0370-x](https://doi.org/10.1186/s12920-018-0370-x) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chlortalidone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | <sub>“…Liver…”</sub> | prose |
| excretion | kidney | <sub>“…excreted unmetabolized through the kidney…”</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor), DUSP1 (target), FOS (target), PPP1R15A (target), SLC12A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 65 matched, 50 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fleuren_1979.pdf` | Fleuren HL et al., Absolute bioavailability of chlorthalid…, European journal of clinica… (1979) | popPK | 9 | [10.1007/BF00563556](https://doi.org/10.1007/BF00563556) | [421727](https://pubmed.ncbi.nlm.nih.gov/421727) | The study reports quantitative PK parameters including half-lives, bioavailability, and compartmental model descriptions for chlorthalidone in humans. |
| `MacGregor_1985.pdf` | MacGregor TR et al., Chlorthalidone pharmacodynamics in beag…, Journal of pharmaceutical s… (1985) | popPK | 9 | [10.1002/jps.2600740810](https://doi.org/10.1002/jps.2600740810) | [4032269](https://pubmed.ncbi.nlm.nih.gov/4032269) | The paper describes a pharmacokinetic study of chlorthalidone in dogs using compartmental models, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| `Pentikis_1996.pdf` | Pentikis HS et al., Bioequivalence: individual and populati…, Pharmaceutical research (1996) | popPK | 9 | [10.1023/a:1016083429903](https://doi.org/10.1023/a:1016083429903) | [8842055](https://pubmed.ncbi.nlm.nih.gov/8842055) | The paper is a population PK study of chlorthalidone, but the specific numeric parameter values are not present in the provided abstract evidence. |
| `Kumar_2017.pdf` | Kumar Puttrevu S et al., Pharmacokinetic-pharmacodynamic modelin…, Naunyn-Schmiedeberg's archi… (2017) | pd | 5 | [10.1007/s00210-017-1339-6](https://doi.org/10.1007/s00210-017-1339-6) | [28190245](https://www.ncbi.nlm.nih.gov/pubmed/28190245) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Tsai_2016.pdf` | Tsai MC et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2016) | pd | 5 | [10.1002/jcph.684](https://doi.org/10.1002/jcph.684) | [26632101](https://www.ncbi.nlm.nih.gov/pubmed/26632101) | metadata signals extractable PD data (Exposure-Response) |
| `Xu_2026.pdf` | Xu C et al., Unmasking of a Heterozygous SLC12A3 Var…, Kidney medicine (2026) | pgx | 8 | [10.1016/j.xkme.2026.101255](https://doi.org/10.1016/j.xkme.2026.101255) | [41767689](https://www.ncbi.nlm.nih.gov/pubmed/41767689) | metadata signals extractable PGX data (SLC12A3, PK/PD-context) |
| `Yang_2022.pdf` | Yang S et al., Genetic variation of pharmacogenomic VI…, Molecular genetics and geno… (2022) | pgx | 5 | [10.1007/s00438-022-01855-9](https://doi.org/10.1007/s00438-022-01855-9) | [35146537](https://www.ncbi.nlm.nih.gov/pubmed/35146537) | metadata signals extractable PGX data (CYP4F2) |

<sub>queue written 2026-09-30T07:23:15.076064+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Angeloni_2016 | not_relevant | 1 | 0 | The paper is a qualitative review of azilsartan and its combinations, providing no numeric pharmacodynamic parameters or exposure-response data for chlortalidone. |
| PGx | Arnett_2005 | not_relevant | 0 | 0 | The study reports null results for the association between ACE genotype and cardiovascular outcomes, not a pharmacokinetic or pharmacodynamic parameter of chlortalidone. |
| PD | Blowey_2016 | not_relevant | 1 | 0 | The text is a general review of diuretics in hypertension and mentions chlorthalidone qualitatively without providing any numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| PD | Bottino_2026 | not_relevant | 2 | 1 | The paper reports a comparative clinical trial with fixed doses (25 mg vs 50 mg) and qualitative dose-response observations for amiloride, but it does not provide a concentration-effect model, PK/PD fit, or numeric PD parameters (Emax, EC50) for chlortalidone. |
| PD | Carter_2004 | not_relevant | 2 | 1 | The paper is a review that qualitatively states chlorthalidone is 1.5-2.0 times more potent than hydrochlorothiazide but does not provide specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves for chlorthalidone itself. |
| PD | Chrysant_2021 | not_relevant | 1 | 0 | The paper is a narrative review comparing the clinical efficacy of chlorthalidone and hydrochlorothiazide, and it does not report any specific pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| PD | Engelhardt_1996 | not_relevant | 0 | 0 | The paper focuses on meloxicam's pharmacology and only qualitatively states that meloxicam did not influence chlorthalidone's diuretic effect, without providing any numeric PD parameters or exposure-response data for chlorthalidone. |
| PGx | Irvin_2010 | not_relevant | 2 | 5 | The study reports pharmacogenomic associations with a clinical outcome (fasting glucose) rather than a direct pharmacokinetic or pharmacodynamic parameter of chlorthalidone. |
| PD | Kendall_1981 | not_relevant | 1 | 0 | The text is an abstract that only qualitatively states that chlorthalidone does not influence metoprolol's beta-blocking action and that plasma levels are similar to monotherapy, without providing any numeric PD parameters, concentration-effect curves, or dose-response data for chlorthalidone. |
| popPK | Kumar_2017 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | MacGregor_1985 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of chlorthalidone in dogs using compartmental models, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| popPK | Maggi_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fenquizone, not chlortalidone, which is only mentioned as a comparator. |
| popPK | Marzo_2000 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only Cmax, tmax, and AUC for chlortalidone, lacking the specific disposition parameters (CL, V, ka, half-life) required for population PK extraction. |
| PD | Marzo_2000 | not_relevant | 1 | 0 | The paper is a bioequivalence study that only qualitatively mentions overlapping pharmacodynamic results (blood pressure) without providing numeric PD parameters or concentration-effect data. |
| PD | McTavish_1990 | not_relevant | 0 | 0 | The paper is a review of cadralazine and only mentions chlorthalidone as a comparator in a qualitative efficacy statement, providing no PD model, exposure-response data, or numeric PD parameters for chlorthalidone. |
| PGx | Mehanna_2017 | not_relevant | 0 | 0 | The paper analyzes blood pressure response based on age and race, not on specific gene variants or genotypes. |
| PGx | Mehanna_2019 | not_relevant | 0 | 0 | The paper investigates plasma renin activity (PRA) as a predictive biomarker for blood pressure response, not a genetic variant or genotype. |
| PD | OReilly_1971 | not_relevant | 0 | 0 | The provided text is only the title of a study and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Pentikis_1996 | relevant | 9 | 0 | The paper is a population PK study of chlorthalidone, but the specific numeric parameter values are not present in the provided abstract evidence. |
| PD | Reilly_2010 | not_relevant | 1 | 0 | The text is a narrative review providing qualitative dose recommendations for hypertension and nephrolithiasis but does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or quantitative exposure-response/dose-response curves for chlortalidone. |
| PGx | Sørensen_2014 | not_relevant | 0 | 0 | The study investigates genetic associations with drug treatment groups (prescription patterns) rather than the effect of genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tanner_2011 | not_relevant | 0 | 0 | The paper reports pharmacogenetic associations with clinical cardiovascular outcomes (e.g., CHD, stroke), not changes in pharmacokinetic or pharmacodynamic parameters of chlortalidone. |
| popPK | Tsai_2016 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| popPK | Turgeon_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel block in guinea pig myocytes, not a pharmacokinetic study, and chlortalidone is only a comparator agent with no PK parameters reported. |
| PD | Turgeon_1994 | not_relevant | 0 | 0 | The study reports that chlortalidone had no effect on IKs current, providing no numeric PD parameters or dose-response relationship for the drug. |
| PD | Turgeon_1995 | not_relevant | 3 | 2 | The paper reports a dose-response study but concludes that chlorthalidone had no protective effect, providing no numeric PD parameters (e.g., EC50, Emax) or derivable concentration-effect curve for the drug. |
| PGx | Xu_2026 | not_relevant | 2 | 5 | The paper describes a clinical case of severe adverse effects (hypokalemia, hyponatremia) unmasked by a genetic variant, but it does not report a fitted pharmacokinetic or pharmacodynamic parameter change (e.g., AUC, EC50) attributable to the genotype. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The paper reports population allele frequencies for VIP variants and mentions potential associations with chlorthalidone via PharmGKB, but it does not report any measured pharmacokinetic or pharmacodynamic parameters or effect sizes for chlorthalidone. |
| PD | Yoon_2026 | not_relevant | 2 | 1 | The paper is a pharmacovigilance and epidemiological cohort study assessing the risk of glaucoma (an adverse event) associated with drug use, not a pharmacodynamic study modeling the drug's therapeutic effect (e.g., blood pressure reduction) against exposure or dose. |
| PD | Zaiken_2011 | not_relevant | 0 | 0 | The paper is a review of azilsartan medoxomil and does not report any pharmacodynamic or exposure-response analysis for chlortalidone. |
| PD | de_1991 | not_relevant | 0 | 0 | The study reports PK parameter changes (clearance, volume of distribution) of a heparinoid induced by chlorthalidone, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for chlorthalidone itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 05:23 UTC</sub>
