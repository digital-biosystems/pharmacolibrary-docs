<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;vandetanib&quot;}]"></div>

# vandetanib

- **generic name:** vandetanib
- **ATC codes:** `L01EX04`, `L01XE`
- **DrugBank:** [DB05294](https://go.drugbank.com/drugs/DB05294) · **PubChem:** [CID 3081361](https://pubchem.ncbi.nlm.nih.gov/compound/3081361)
- **molar mass:** 475.354 g/mol (C22H24BrFN4O2) — DrugBank
- **groups:** approved

## About

Vandetanib is a protein kinase inhibitor used to treat thyroid cancer, especially medullary thyroid carcinoma. It is an approved medicine and remains authorised in the European Union, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7914515](https://www.wikidata.org/wiki/Q7914515) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:53 | 12:36 | 0/1/0 | 9/0/0 | 0/0/1 | 188,655/29,476 | openai / gpt-6-luna | 29 | 0/10 | 29/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2011_reference](drugs/drug_vandetanib/Vandetanib_Zhang2011_reference.md) | — | 1-compartment (no model) | 0 | Zhang L et al., Pharmacokinetics and tolerability of va…, Clinical therapeutics (2011) | [10.1016/j.clinthera.2011.04.005](https://doi.org/10.1016/j.clinthera.2011.04.005) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Damaraju_2015_SNBT](drugs/drug_vandetanib/pd_Damaraju_2015_SNBT.md) | sodium-dependent nucleobase transport (SNBT) activity ← vandetanib · inhibition effect | — | Damaraju VL et al., Inhibition of sodium-independent and so…, Cancer chemotherapy and pha… (2015) | [10.1007/s00280-015-2859-8](https://doi.org/10.1007/s00280-015-2859-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jia_2010_proliferation_of_K562_G_cells](drugs/drug_vandetanib/pd_Jia_2010_proliferation_of_K562_G_cells.md) | proliferation of K562/G cells ← ZD6474 (vandetanib) · inhibition effect | — | Jia HY et al., [Effect of ZD6474 on the proliferation…, Zhonghua xue ye xue za zhi… (2010) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jia_2010_proliferation_of_K562_cells](drugs/drug_vandetanib/pd_Jia_2010_proliferation_of_K562_cells.md) | proliferation of K562 cells ← ZD6474 (vandetanib) · inhibition effect | — | Jia HY et al., [Effect of ZD6474 on the proliferation…, Zhonghua xue ye xue za zhi… (2010) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">other animal</span> | [Khurana_2014_cellular_accumulation_of_radiolabeled_probe_substrate_3H_cholecystokinin_octapeptide](drugs/drug_vandetanib/pd_Khurana_2014_cellular_accumulation_of_radiolabeled_probe_sub.md) | cellular accumulation of radiolabeled probe substrate [3H]cholecystokinin octapeptide ← vandetanib · inhibition effect | — | Khurana V et al., Inhibition of OATP-1B1 and OATP-1B3 by…, Drug metabolism and drug in… (2014) | [10.1515/dmdi-2014-0014](https://doi.org/10.1515/dmdi-2014-0014) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rabbit</span> | [Lee_2018_INa](drugs/drug_vandetanib/pd_Lee_2018_INa.md) | INa current in hiPSC-CMs ← vandetanib · inhibition effect | — | Lee HA et al., Electrophysiological mechanisms of vand…, PloS one (2018) | [10.1371/journal.pone.0195577](https://doi.org/10.1371/journal.pone.0195577) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rabbit</span> | [Lee_2018_INa_2](drugs/drug_vandetanib/pd_Lee_2018_INa_2.md) | INa current in HEK293 cells ← vandetanib · inhibition effect | — | Lee HA et al., Electrophysiological mechanisms of vand…, PloS one (2018) | [10.1371/journal.pone.0195577](https://doi.org/10.1371/journal.pone.0195577) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leow_2023_EETs](drugs/drug_vandetanib/pd_Leow_2023_EETs.md) | metabolism of AA to EETs ← vandetanib · inhibition effect | — | Leow JWH et al., Investigating the relevance of CYP2J2 i…, European journal of pharmac… (2023) | [10.1016/j.ejps.2023.106475](https://doi.org/10.1016/j.ejps.2023.106475) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Puhl_2021_inhibition_of_SARS_CoV_2](drugs/drug_vandetanib/pd_Puhl_2021_inhibition_of_SARS_CoV_2.md) | inhibition of SARS-CoV-2 ← vandetanib · inhibition effect | — | Puhl AC et al., Vandetanib Reduces Inflammatory Cytokin…, bioRxiv : the preprint serv… (2021) | [10.1101/2021.12.16.472155](https://doi.org/10.1101/2021.12.16.472155) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sakumoto_2018_viability](drugs/drug_vandetanib/pd_Sakumoto_2018_viability.md) | viability ← vandetanib · inhibition effect | — | Sakumoto M et al., Establishment and proteomic characteriz…, In vitro cellular & develop… (2018) | [10.1007/s11626-017-0207-5](https://doi.org/10.1007/s11626-017-0207-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tanihara_2021_creatinine_uptake_mediated_by_hOCT2](drugs/drug_vandetanib/pd_Tanihara_2021_creatinine_uptake_mediated_by_hOCT2.md) | creatinine uptake mediated by hOCT2 ← vandetanib · inhibition effect | — | Tanihara Y et al., Inhibitory effects of vandetanib on cre…, European journal of pharmac… (2021) | [10.1016/j.ejps.2020.105666](https://doi.org/10.1016/j.ejps.2020.105666) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2021_QT](drugs/drug_vandetanib/pd_Zhang_2021_QT.md) | QT interval ← vandetanib · stimulation effect | — | Zhang J et al., Ginsenoside Rg3 Alleviates Antithyroid…, Oxidative medicine and cell… (2021) | [10.1155/2021/3520034](https://doi.org/10.1155/2021/3520034) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ACVR1** | `Q322` · IC50 | target | [Carvalho_2022](drugs/drug_vandetanib/pgx_Carvalho_2022_ACVR1_Q322.md) | Carvalho DM et al., Repurposing Vandetanib plus Everolimus…, Cancer discovery (2022) | [10.1158/2159-8290.CD-20-1201](https://doi.org/10.1158/2159-8290.CD-20-1201) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vandetanib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `FMO3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACVR1 (target), EGFR (inhibitor), FMO1 (substrate), KDR (inhibitor), PTK6 (inhibitor), RET (inhibitor), TEK (inhibitor), VEGFA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 117 matched, 91 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2011.pdf` | Zhang L et al., Pharmacokinetics and tolerability of va…, Clinical therapeutics (2011) | popPK | 10 | [10.1016/j.clinthera.2011.04.005](https://doi.org/10.1016/j.clinthera.2011.04.005) | [21600385](https://pubmed.ncbi.nlm.nih.gov/21600385) | Human vandetanib clearance and half-life values are reported numerically, along with population-PK findings. |

<sub>queue written 2026-10-07T08:46:31.071473+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Azzariti_2010 | not_relevant | 0 | 0 | The paper studies cellular transporter interactions with vandetanib, not how a gene variant, genotype, or phenotype changes a vandetanib PK or PD parameter. |
| PGx | Beretta_2017 | not_relevant | 0 | 0 | This review discusses ABC transporter interactions and drug resistance, but reports no gene variant/genotype/phenotype effect on a vandetanib PK or PD parameter. |
| PGx | Chheda_2015 | not_relevant | 0 | 0 | The study reports no gene variant, genotype, or phenotype effects on vandetanib pharmacokinetic or pharmacodynamic parameters. |
| PGx | Espinoza-Ferrao_2025 | not_relevant | 0 | 0 | Vandetanib is mentioned as a targeted therapy, but no variant or genotype effect on its pharmacokinetic or pharmacodynamic parameters is reported. |
| PGx | Filppula_2014 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition testing of vandetanib, not a gene variant, genotype, or phenotype effect on its PK or PD. |
| PGx | Hegedüs_2012 | not_relevant | 0 | 0 | The study examines ABCG2-mediated cellular drug resistance and inhibition, but reports no gene variant, genotype, or phenotype effect on a vandetanib PK or PD parameter. |
| PGx | Indra_2019 | not_relevant | 0 | 0 | The study characterizes in vitro metabolism by CYP/FMO enzymes but does not test gene variants, genotypes, or phenotypes affecting vandetanib PK or PD. |
| PGx | Johansson_2014 | not_relevant | 0 | 0 | Reports drug–drug interactions, not effects of a gene variant, genotype, or phenotype on vandetanib PK or PD. |
| PGx | Kolarik_2019 | not_relevant | 0 | 0 | The study examines vandetanib’s inhibition of ellipticine oxidation in vitro, not how a genetic variant or phenotype affects vandetanib PK or PD. |
| PGx | Liu_2011 | not_relevant | 0 | 0 | The study examines vandetanib's inhibition of paracetamol glucuronidation, not how genetic variation affects vandetanib PK or PD. |
| PGx | Ly_2017 | not_relevant | 0 | 0 | The paper reports drug-interaction effects in transgenic mice, not effects of a gene variant, genotype, or phenotype on vandetanib PK/PD. |
| PGx | Martin_2011 | not_relevant | 0 | 0 | Reports CYP3A4 drug–drug interactions, not effects of a gene variant, genotype, or phenotype on vandetanib PK/PD. |
| PGx | Minocha_2012 | not_relevant | 0 | 0 | Vandetanib is used only as an analytical internal standard; the study reports no pharmacogenomic effect on its PK or PD. |
| PGx | Minocha_2012_2 | not_relevant | 0 | 0 | The study examines transporter inhibition and brain distribution, not how a gene variant, genotype, or phenotype changes vandetanib PK or PD. |
| PGx | Prete_2021 | not_relevant | 0 | 0 | The paper discusses potential drug–drug interactions involving CYP3A4, but reports no gene variant, genotype, or phenotype effect on vandetanib PK or PD. |
| PGx | Shen_2025 | not_relevant | 0 | 0 | The paper studies a luteolin–vandetanib drug interaction, not an effect of a gene variant, genotype, or phenotype on vandetanib PK/PD. |
| PGx | Subbiah_2015 | not_relevant | 0 | 0 | The paper describes tumor RET fusion and response to combination therapy, but does not report a gene variant or phenotype altering a vandetanib PK or PD parameter. |
| PGx | Tsang_2019 | not_relevant | 0 | 0 | The review discusses vandetanib toxicities and CYP3A4 inhibitor drug interactions, but reports no pharmacogenomic effects on a PK or PD parameter. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper studies transporter and CYP effects on pralsetinib, not pharmacogenomic effects on vandetanib. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | The paper studies vandetanib inhibition of UGT1A9 and potential drug–drug interactions, not effects of genetic variants, genotypes, or phenotypes on vandetanib PK or PD. |
| PGx | Zhao_2022 | not_relevant | 0 | 0 | The paper analyzes transcriptomic signatures associated with aging and vandetanib exposure, not gene-variant effects on vandetanib pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zheng_2009 | not_relevant | 0 | 0 | The study examines transporter overexpression and vandetanib’s in-vitro effects, but does not report a gene variant, genotype, or phenotype changing a vandetanib PK or PD parameter. |
| PGx | unknown_2016 | not_relevant | 0 | 0 | The text reports no gene variant, genotype, or phenotype effect on a vandetanib PK or PD parameter. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:46 UTC</sub>
