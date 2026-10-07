<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08E&quot;,&quot;href&quot;:&quot;atc/C08E.md&quot;},{&quot;label&quot;:&quot;bepridil&quot;}]"></div>

# bepridil

- **generic name:** bepridil
- **ATC codes:** `C08EA02`
- **DrugBank:** [DB01244](https://go.drugbank.com/drugs/DB01244) · **PubChem:** [CID 2351](https://pubchem.ncbi.nlm.nih.gov/compound/2351)
- **molar mass:** 366.5396 g/mol (C24H34N2O) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Bepridil is a calcium channel blocker that was used to treat angina pectoris and arterial hypertension. It has been withdrawn from the market, reportedly because of safety concerns, and is no longer in general clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4890934](https://www.wikidata.org/wiki/Q4890934) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bepridil | parent | 366.54 | C24H34N2O | DrugBank | [2351](https://pubchem.ncbi.nlm.nih.gov/compound/2351) | Nielsen-Kudsk_1988, Taguchi_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:58 | 14:04 | 0/2/0 | 0/0/0 | 0/0/2 | 141,465/19,810 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 3/1 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Nielsen-Kudsk_1988_reference](drugs/drug_bepridil/Bepridil_NielsenKudsk1988_reference.md) | — | 1-compartment (no model) | 2 | Nielsen-Kudsk F et al., Bepridil, myocardial accumulation kinet…, Pharmacology & toxicology (1988) | [10.1111/j.1600-0773.1988.tb00923.x](https://doi.org/10.1111/j.1600-0773.1988.tb00923.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Taguchi_2006_reference](drugs/drug_bepridil/Bepridil_Taguchi2006_reference.md) | — | 1-compartment (no model) | 1 | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2006) | [10.1248/bpb.29.517](https://doi.org/10.1248/bpb.29.517) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Taguchi_2006](drugs/drug_bepridil/pgx_Taguchi_2006_CYP2D6_Q27.md) | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2006) | [10.1248/bpb.29.517](https://doi.org/10.1248/bpb.29.517) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP3A5** | `Q27` · CL/F | metabolism | [Taguchi_2006](drugs/drug_bepridil/pgx_Taguchi_2006_CYP3A5_Q27.md) | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2006) | [10.1248/bpb.29.517](https://doi.org/10.1248/bpb.29.517) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bepridil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` metabolism | paper PGx gene |
| metabolism | liver | `CYP2D6` inhibitor/metabolism/substrate, `CYP3A4` substrate, `CYP3A5` metabolism | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` metabolism | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), CACNA1A (inhibitor), CACNA1H (inhibitor), CACNA2D2 (inhibitor), CALM1 (binder), KCNH2 (inhibitor), KCNQ1 (inhibitor), PDE1A (inhibitor), PDE1B (inhibitor), TNNC1 (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 122 matched, 65 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lesko_1986.pdf` | Lesko LJ et al., Pharmacokinetics of intravenous bepridi…, Journal of pharmaceutical s… (1986) | popPK | 10 | [10.1002/jps.2600751008](https://doi.org/10.1002/jps.2600751008) | [3491897](https://pubmed.ncbi.nlm.nih.gov/3491897) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for bepridil in humans with values explicitly listed in the text. |
| `Shiga_2013.pdf` | Shiga T et al., Contributing factors to the apparent cl…, Therapeutic drug monitoring (2013) | popPK | 10 | [10.1097/FTD.0b013e318286ec33](https://doi.org/10.1097/FTD.0b013e318286ec33) | [23666576](https://pubmed.ncbi.nlm.nih.gov/23666576) | The paper describes a population PK study of bepridil in humans, but the specific numeric parameter values (e.g., mean CL/F, V/F) are not present in the provided abstract or evidence text. |
| `Nielsen-Kudsk_1988.pdf` | Nielsen-Kudsk F et al., Bepridil, myocardial accumulation kinet…, Pharmacology & toxicology (1988) | popPK | 8 | [10.1111/j.1600-0773.1988.tb00923.x](https://doi.org/10.1111/j.1600-0773.1988.tb00923.x) | [3263633](https://pubmed.ncbi.nlm.nih.gov/3263633) | The study reports quantitative two-compartment kinetic parameters (half-lives, distribution times, steady-state concentrations) for bepridil in the isolated rabbit heart. |

<sub>queue written 2026-10-07T04:51:38.360200+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alkafaas_2024 | not_relevant | 0 | 0 | The paper discusses bepridil only as a potential inhibitor of acid sphingomyelinase in the context of SARS-CoV-2 entry via molecular docking, with no mention of pharmacogenomics or PK/PD parameters. |
| popPK | Batra_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug effects on cell proliferation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Calabresi_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of bepridil's mechanism of action on neuronal depolarization, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of SARS-CoV-2 main protease inhibition where bepridil is used only as a repurposed drug probe, with no pharmacokinetic parameters reported. |
| popPK | Choi_2011 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ginsenoside Rg(3) on hERG channels, using bepridil only as a comparator antagonist, and reports no pharmacokinetic parameters. |
| popPK | Chouabe_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of channel blocking (EC50) and does not report pharmacokinetic disposition parameters. |
| popPK | Chouabe_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology assay measuring channel blocking potency (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Doki_2015 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on flecainide metabolism, not bepridil. |
| PGx | Fung_2000 | not_relevant | 0 | 0 | The paper is a review of amprenavir and only mentions bepridil as a contraindicated drug due to CYP3A4 interactions, without reporting any pharmacogenomic effects on bepridil's PK or PD parameters. |
| popPK | Hugtenburg_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium antagonists on cardiac contractility, not a pharmacokinetic study. |
| popPK | Jy_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium fluxes in platelets where bepridil is used only as a pharmacological inhibitor, not as the subject of pharmacokinetic analysis. |
| PGx | Kobayashi_1998 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP1A2 inhibition) and does not report any pharmacogenomic effects (gene variants) on bepridil's PK or PD parameters. |
| popPK | Larsson_2002 | irrelevant | 0 | 0 | The study investigates vitamin D effects on calcium channels in Atlantic cod enterocytes, using bepridil only as a pharmacological tool to block Na+/Ca2+ exchange, not as the subject of a pharmacokinetic analysis. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving cisapride and mentions bepridil only as a contraindicated co-medication due to QT prolongation risk, without reporting any pharmacogenomic effects on bepridil's PK or PD parameters. |
| popPK | Nebrisi_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of curcumin on nicotinic receptors where bepridil is used only as a non-specific calcium channel antagonist control, not as the subject drug for PK analysis. |
| popPK | Shiga_2013 | relevant | 10 | 0 | The paper describes a population PK study of bepridil in humans, but the specific numeric parameter values (e.g., mean CL/F, V/F) are not present in the provided abstract or evidence text. |
| popPK | Vatansever_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-viral activity and does not report pharmacokinetic parameters. |
| popPK | Wang_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and molecular docking investigation of bepridil's effect on TREK-1 channels, reporting IC50 values for channel blockade rather than pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Watanabe_2001 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of bepridil's mechanism of action on ion channels, not a pharmacokinetic study. |
| popPK | Zhu_1993 | irrelevant | 2 | 0 | The study is an in-vitro pharmacodynamic/mechanistic study on guinea pig atrium that simulates PK parameters rather than measuring quantitative disposition parameters (CL, V, etc.) for bepridil. |
| popPK | de_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of myofilament calcium sensitivity using rabbit myofibrils, not a pharmacokinetic study of bepridil. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:51 UTC</sub>
