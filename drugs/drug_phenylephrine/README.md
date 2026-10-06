<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;phenylephrine&quot;}]"></div>

# phenylephrine

- **generic name:** phenylephrine
- **ATC codes:** `C01CA06`, `C05AX06`, `R01AA04`, `R01AB01`, `R01BA03`, `S01FB01`, `S01FB51`, `S01GA05`
- **DrugBank:** [DB00388](https://go.drugbank.com/drugs/DB00388) · **PubChem:** [CID 6041](https://pubchem.ncbi.nlm.nih.gov/compound/6041)
- **molar mass:** 167.205 g/mol (C9H13NO2) — DrugBank
- **groups:** approved, investigational

## About

Phenylephrine is a decongestant and vasoconstrictor used for conditions such as nasal congestion, hemorrhoids, low blood pressure, and to dilate the pupil in eye examinations. It is widely used, available in nasal, topical, eye, and injectable preparations, and is an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421910](https://www.wikidata.org/wiki/Q421910) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenylephrine | parent | 167.205 | C9H13NO2 | DrugBank | [6041](https://pubchem.ncbi.nlm.nih.gov/compound/6041) | Anderson_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:13 | 8:52 | 0/0/1 | 0/0/0 | 0/0/2 | 201,310/17,998 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/12 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Anderson_2017_children and adults](drugs/drug_phenylephrine/Phenylephrine_Anderson2017_reference.md) | — | 2-compartment (no model) | 7 | Anderson BJ et al., The phenylephrine concentration-respons…, Paediatric anaesthesia (2017) | [10.1111/pan.13221](https://doi.org/10.1111/pan.13221) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ADRA1A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhang_2019](drugs/drug_phenylephrine/pgx_Zhang_2019_ADRA1A_Q100.md) | Zhang Y et al., Dissecting genetic factors affecting ph…, BMC medicine (2019) | [10.1186/s12916-019-1405-7](https://doi.org/10.1186/s12916-019-1405-7) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **EDN2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhang_2019](drugs/drug_phenylephrine/pgx_Zhang_2019_EDN2_Q100.md) | Zhang Y et al., Dissecting genetic factors affecting ph…, BMC medicine (2019) | [10.1186/s12916-019-1405-7](https://doi.org/10.1186/s12916-019-1405-7) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenylephrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOA` substrate, `MAOB` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `MAOA` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), DRD2 (target), EDN2 (target), SULT1A3 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 946 matched, 50 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anderson_2017.pdf` | Anderson BJ et al., The phenylephrine concentration-respons…, Paediatric anaesthesia (2017) | popPK | 10 | [10.1111/pan.13221](https://doi.org/10.1111/pan.13221) | [28868789](https://pubmed.ncbi.nlm.nih.gov/28868789) | The paper reports a population PK-PD model for phenylephrine with explicit numeric values for clearance, volume, intercompartmental clearance, and absorption parameters. |
| `Seliniotaki_2025.pdf` | Seliniotaki AK et al., Efficacy and Safety of Mydriatic Microd…, JAMA ophthalmology (2025) | popPK | 8 | [10.1001/jamaophthalmol.2024.5462](https://doi.org/10.1001/jamaophthalmol.2024.5462) | [39724200](https://pubmed.ncbi.nlm.nih.gov/39724200) | The study reports a 1-compartment PK model for phenylephrine in preterm infants, but the specific numeric parameter values (CL, V, ka) are not present in the provided text. |
| `Huber_1998.pdf` | Huber TB et al., Catecholamines modulate podocyte functi…, Journal of the American Soc… (1998) | pd | 5 | [10.1681/ASN.V93335](https://doi.org/10.1681/ASN.V93335) | [9513895](https://www.ncbi.nlm.nih.gov/pubmed/9513895) | metadata signals extractable PD data (EC50) |
| `Morris_2007.pdf` | Morris RW et al., "Orpheus" cardiopulmonary bypass simula…, The journal of extra-corpor… (2007) | pd | 5 | not captured | [18293807](https://www.ncbi.nlm.nih.gov/pubmed/18293807) | metadata signals extractable PD data (effectcompartment) |
| `Bellissant_2000.pdf` | Bellissant E et al., Effect of hydrocortisone on phenylephri…, Clinical pharmacology and t… (2000) | pd | 4 | [10.1067/mcp.2000.109354](https://doi.org/10.1067/mcp.2000.109354) | [11014411](https://www.ncbi.nlm.nih.gov/pubmed/11014411) | metadata signals extractable PD data (sigmoid) |
| `McIntyre_1996.pdf` | McIntyre RC et al., Pulmonary vascular smooth muscle contra…, The Journal of surgical res… (1996) | pd | 4 | [10.1006/jsre.1996.0100](https://doi.org/10.1006/jsre.1996.0100) | [8769962](https://www.ncbi.nlm.nih.gov/pubmed/8769962) | metadata signals extractable PD data (EC50) |
| `Morais_2019.pdf` | Morais ICPS et al., Cardiovascular Effect of Diosgenin in O…, Journal of medicinal food (2019) | pd | 4 | [10.1089/jmf.2018.0019](https://doi.org/10.1089/jmf.2018.0019) | [30735081](https://www.ncbi.nlm.nih.gov/pubmed/30735081) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-06T10:05:51.852690+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Angus_1982 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of verapamil on coronary artery constriction in dogs and does not report any pharmacogenomic effects on phenylephrine. |
| PGx | Aninat_2008 | not_relevant | 0 | 0 | The study investigates the effect of catecholamines on hepatocyte inflammation and CYP3A4 expression in vitro, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of phenylephrine. |
| PGx | Bairam_2019 | not_relevant | 5 | 8 | The study reports in vitro enzymatic kinetics (Km, Vmax) of SULT1A3 allozymes, not in vivo pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Bellissant_2000 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PGx | Benedetti_2001 | not_relevant | 0 | 0 | The paper is a general review on amine oxidases and mentions phenylephrine only as an example of a potential drug interaction, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Bilgen_2003 | not_relevant | 0 | 0 | The paper studies cadmium-induced endothelial dysfunction and does not report any pharmacogenomic effects (gene variants) on phenylephrine PK or PD parameters. |
| PGx | Bonaventura_2011 | not_relevant | 0 | 0 | The study investigates vascular reactivity in hypertensive rat models, not the effect of human gene variants on phenylephrine pharmacokinetics or pharmacodynamics. |
| popPK | Choi_2024 | irrelevant | 0 | 0 | The study is an in-vitro wire myography protocol optimization using phenylephrine as a vasoconstrictor agent, not a pharmacokinetic study of phenylephrine disposition. |
| PGx | Costa_2019 | not_relevant | 0 | 0 | The study investigates the effect of estrogen therapy and aging on phenylephrine-induced vascular contraction, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of phenylephrine. |
| PGx | Cupitra_2020 | not_relevant | 0 | 0 | The study investigates the effect of ageing on vascular reactivity to phenylephrine in rabbits, not the effect of a gene variant or genotype. |
| popPK | Cupitra_2023 | irrelevant | 0 | 0 | The study is a comparative vascular physiology/pharmacology study using phenylephrine as a contractile agonist in organ baths, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Donpunha_2011 | not_relevant | 0 | 0 | The study investigates the protective effect of ascorbic acid on cadmium-induced vascular dysfunction and does not report any pharmacogenomic effects (gene variants) on phenylephrine PK or PD parameters. |
| PGx | Fiorim_2012 | not_relevant | 0 | 0 | The paper investigates the effect of lead exposure on vascular reactivity to phenylephrine, not the effect of a gene variant on phenylephrine pharmacokinetics or pharmacodynamics. |
| PGx | Goswami_2016 | not_relevant | 0 | 0 | The paper studies the pharmacological interaction between phloroglucinol and sildenafil in diabetic rats, not the effect of a gene variant on phenylephrine PK/PD. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of verapamil's antagonism of alpha-adrenoceptors using phenylephrine as a tool compound, not a pharmacokinetic study of phenylephrine. |
| popPK | Huber_1998 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| PD | Huber_1998 | not_relevant | 0 | 0 | The provided text is a title regarding catecholamines and podocyte function, with no content describing phenylephrine, PK/PD modeling, or numeric exposure-response parameters. |
| PGx | Kaleli_2025 | not_relevant | 0 | 0 | The study investigates the vascular effects of sirolimus and everolimus on human saphenous veins and does not report any pharmacogenomic effects on the PK or PD of phenylephrine. |
| PGx | Kao_2023 | not_relevant | 0 | 0 | The paper describes a mathematical model for vasopressor therapy in pigs and does not report any pharmacogenomic effects or gene variants. |
| PGx | Konstandi_2006 | not_relevant | 0 | 0 | The paper investigates the regulation of CYP1A2 expression by adrenergic signaling and does not report pharmacogenomic effects on phenylephrine's PK or PD parameters. |
| popPK | Kubo_2023 | irrelevant | 0 | 0 | The study evaluates cerebral oxygenation changes using near-infrared spectroscopy and does not report any pharmacokinetic parameters (clearance, volume, half-life) for phenylephrine. |
| PGx | Landau_2011 | not_relevant | 0 | 0 | The study reports that phenylephrine dose was not affected by maternal ADRB2 or NOS3 genotypes, and the significant pharmacogenomic effects found were on fetal acid-base status (a PD outcome) specifically for ephedrine, not phenylephrine. |
| popPK | Lapointe_1991 | irrelevant | 0 | 0 | The study examines calcium kinetics in rat liver where phenylephrine is used as a hormonal stimulant, not as the subject drug for PK analysis. |
| popPK | Lara_2020 | irrelevant | 0 | 0 | The study investigates the effect of retinal illuminance on accommodation, using phenylephrine only as a mydriatic agent to control pupil size, and reports no pharmacokinetic parameters. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of crystalloid fluid (Ringer's lactate) in sheep, using phenylephrine only as a vasoactive co-administered drug to test its effect on fluid distribution, not as the subject drug. |
| PGx | Liu_2018 | not_relevant | 0 | 0 | The study investigates the cellular mechanism of NT-PGC-1α in mitigating phenylephrine-induced mitochondrial dysfunction in cardiomyocytes, not the pharmacokinetic or pharmacodynamic effects of phenylephrine based on genetic variants. |
| PGx | Lynch_2020 | not_relevant | 0 | 0 | The paper investigates the vascular effects of crotonaldehyde exposure and the role of TRPA1, using phenylephrine only as a standard agonist for aortic contraction assays, rather than reporting a pharmacogenomic effect on phenylephrine's PK or PD parameters. |
| popPK | Martišienė_2023 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of smooth muscle contraction where phenylephrine is used as a contractile agent, not a subject of pharmacokinetic analysis. |
| popPK | McIntyre_1996 | irrelevant | 0 | 0 | no_text gate: only 44 chars of text extracted (&lt; 400) |
| PD | McIntyre_1996 | not_relevant | 0 | 0 | The provided text is a title fragment regarding pulmonary vascular smooth muscle contraction and contains no data, analysis, or mention of phenylephrine or any pharmacodynamic parameters. |
| popPK | Monge_2017 | irrelevant | 0 | 0 | The study investigates hemodynamic parameters (arterial elastance) in rabbits using phenylephrine as a pharmacological tool to alter arterial load, rather than measuring phenylephrine's pharmacokinetic disposition parameters. |
| popPK | Morais_2019 | irrelevant | 0 | 0 | no_text gate: only 57 chars of text extracted (&lt; 400) |
| PD | Morais_2019 | not_relevant | 0 | 0 | The paper investigates the cardiovascular effects of diosgenin in rats, not phenylephrine, and does not report any exposure-response or dose-response relationship for phenylephrine. |
| popPK | Morris_2007 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| PD | Morris_2007 | not_relevant | 0 | 0 | The paper describes a cardiopulmonary bypass simulation system and does not report any pharmacodynamic or exposure-response data for phenylephrine. |
| PGx | Nielsen_2016 | not_relevant | 4 | 5 | The study reports an association between ADRB2 genotype and the *requirement* for vasopressors (phenylephrine/ephedrine) to maintain blood pressure, rather than a direct pharmacokinetic or pharmacodynamic parameter (e.g., EC50, AUC, clearance) of phenylephrine itself. |
| PGx | Nwokocha_2012 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a plant extract and its CYP inhibition, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of phenylephrine. |
| popPK | Panta_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity and signaling pathways, not a pharmacokinetic study reporting disposition parameters for phenylephrine. |
| PGx | Pereira_2011 | not_relevant | 0 | 0 | The paper studies a new nitric oxide donor (RuBPY) and its mechanism of action, using phenylephrine only as a tool to pre-contract aortas, and does not report any pharmacogenomic effects on phenylephrine. |
| popPK | Seliniotaki_2025 | relevant | 8 | 2 | The study reports a 1-compartment PK model for phenylephrine in preterm infants, but the specific numeric parameter values (CL, V, ka) are not present in the provided text. |
| PGx | Silver_1990 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of cicletanine and its interaction with guanylate cyclase activators, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of phenylephrine. |
| PGx | Simfukwe_2025 | not_relevant | 0 | 0 | The study evaluates the vasodilatory effects of a plant extract on rat aortic rings and does not investigate the impact of gene variants or genotypes on the pharmacokinetics or pharmacodynamics of phenylephrine. |
| PGx | Streefkerk_2002 | not_relevant | 0 | 0 | The study investigates the influence of pre-contraction type on vasodilator responses in rat aortic rings and does not report any pharmacogenomic effects (gene variants) on phenylephrine PK or PD. |
| PGx | Taniguchi_2005 | not_relevant | 0 | 0 | The study investigates the effect of a diet and pioglitazone on endothelial function in rabbits, using phenylephrine only as a precontracting agent, and does not report any pharmacogenomic effects on phenylephrine PK or PD. |
| PGx | Tom_2014 | not_relevant | 0 | 0 | The study investigates the effect of a plant extract on phenylephrine-induced vasoconstriction in rats, not the effect of a human gene variant on phenylephrine pharmacokinetics or pharmacodynamics. |
| popPK | Villatoro_2020 | irrelevant | 0 | 0 | The study investigates the effect of topical phenylephrine on retinal imaging metrics (OCTA), not its pharmacokinetic disposition parameters. |
| PGx | Zhang_2019_2 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of a metabolite standard for future PK studies and does not report any pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 10:05 UTC</sub>
