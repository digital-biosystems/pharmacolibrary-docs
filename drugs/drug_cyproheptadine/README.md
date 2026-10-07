<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;cyproheptadine&quot;}]"></div>

# cyproheptadine

- **generic name:** cyproheptadine
- **ATC codes:** `R06AX02`
- **DrugBank:** [DB00434](https://go.drugbank.com/drugs/DB00434) · **PubChem:** [CID 2913](https://pubchem.ncbi.nlm.nih.gov/compound/2913)
- **molar mass:** 287.3981 g/mol (C21H21N) — DrugBank
- **groups:** approved, investigational

## About

Cyproheptadine is an antihistamine used for allergic conditions such as urticaria, angioedema and vasomotor rhinitis, and has also been used in conditions like Nelson syndrome. It is an approved drug, but it is not authorised in the European Union and is used relatively little there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417884](https://www.wikidata.org/wiki/Q417884) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:26 | 6:45 | 0/0/0 | 0/1/1 | 0/0/0 | 304,948/5,281 | einfracz / qwen3.8-27b | 14 | 3/9 | 14/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Madani_2016_CIG](drugs/drug_cyproheptadine/pd_Madani_2016_CIG.md) | clinical improvement ← cyproheptadine · categorical (graded) response model | — | Madani S et al., Cyproheptadine Use in Children With Fun…, Journal of pediatric gastro… (2016) | [10.1097/MPG.0000000000000964](https://doi.org/10.1097/MPG.0000000000000964) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">pig</span> | [Dohmoto_2003_Ca_2_currents](drugs/drug_cyproheptadine/pd_Dohmoto_2003_Ca_2_currents.md) | Ca(2+) currents ← cyproheptadine · inhibition effect | — | Dohmoto H et al., Cardiac Ca(2+) channel-blocking effects…, Journal of pharmacological… (2003) | [10.1254/jphs.91.163](https://doi.org/10.1254/jphs.91.163) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cyproheptadine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `SLC22A1` inhibitor, `UGT1A3` substrate, `UGT1A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), HRH1 (target), HRH2 (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR7 (target), UGT2B10 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 164 matched, 78 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2005 | irrelevant | 0 | 0 | The paper is an electrophysiological study in rat neurons where cyproheptadine is used as a tool compound (5-HT2 antagonist) to determine receptor mechanism, not as a subject for pharmacokinetic analysis. |
| popPK | Balfanz_2014 | irrelevant | 0 | 0 | The study is an in vitro pharmacological characterization of honeybee octopamine receptors using cyproheptadine as a competitor antagonist, not a pharmacokinetic study. |
| PGx | Bianconi_2022 | not_relevant | 0 | 0 | The paper focuses on tramadol pharmacokinetics and toxicity, and while cyproheptadine is administered, the paper does not report any pharmacogenomic effects on cyproheptadine's PK or PD parameters. |
| popPK | Bilder_1990 | irrelevant | 0 | 0 | The study is a vascular physiology/pharmacology experiment in rats investigating PKC-mediated vasoconstriction, where cyproheptadine is used only as a pharmacological antagonist to rule out serotonergic involvement, not as a subject of pharmacokinetic analysis. |
| popPK | Brazenor_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological experiment on canine coronary arteries investigating receptor mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Broccatelli_2010 | not_relevant | 2 | 0 | The paper discusses cyproheptadine only as an example of a non-effluxed drug in a broader analysis of H1 antagonists; it does not report a specific pharmacogenomic study or effect size for cyproheptadine's PK/PD parameters. |
| PGx | Cheung_2026 | not_relevant | 0 | 0 | The paper is a clinical case report describing a treatment regimen; it does not report pharmacogenomic associations or specific genotype-based effects on cyproheptadine pharmacokinetics or pharmacodynamics. |
| popPK | Chodera_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amphetamine (AMPH), with cyproheptadine serving only as a pretreatment agent to study interactions, and no PK parameters for cyproheptadine are reported. |
| popPK | Clineschmidt_1985 | irrelevant | 0 | 0 | The study is a pharmacological characterization of 5-HT receptors in rat stomach fundus, not a pharmacokinetic study of cyproheptadine. |
| popPK | Connell_1989 | irrelevant | 0 | 0 | The paper is a pharmacological study on serotonin receptors in neonatal rat spinal cord where cyproheptadine is used as a non-specific antagonist, with no pharmacokinetic data reported. |
| popPK | Costall_1988 | irrelevant | 0 | 0 | This is a behavioral pharmacology study in mice where cyproheptadine is used only as a negative control/comparator and no pharmacokinetic parameters are reported. |
| popPK | Enguix_2003 | irrelevant | 0 | 0 | The study is an in vitro/receptor pharmacology investigation of 5-HT receptor regulation using cyproheptadine as a drug treatment, not a pharmacokinetic study. |
| PGx | Ericson_2008 | not_relevant | 0 | 0 | The paper reports off-target effects of psychoactive drugs (including cyproheptadine) using yeast gene deletion screening, but does not report human pharmacogenomic variations affecting cyproheptadine's PK or PD parameters. |
| popPK | Hashemzadeh-Gargari_1992 | irrelevant | 0 | 0 | The paper is a physiological study on lobster neurons where cyproheptadine is used only as a pharmacological probe for receptor antagonism, not for pharmacokinetic analysis. |
| popPK | Jaklin_2022 | irrelevant | 0 | 0 | The paper describes a teratogenicity assay using stem cells and does not involve cyproheptadine or report any pharmacokinetic parameters. |
| popPK | Kamikawa_1983 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study examining the mechanism of 5-HT action on guinea-pig oesophagus, not a pharmacokinetic study of cyproheptadine. |
| PGx | Levin_2008 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction involving CYP2C19 inhibition but does not report any pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter of cyproheptadine. |
| popPK | Meddah_2014 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study using Ussing chambers to assess antisecretory effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Muramatsu_1988 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assay of EGF-urogastrone in guinea pig stomach, where cyproheptadine is used only as a negative control antagonist with no PK parameters reported. |
| popPK | Nakijoba_2025 | irrelevant | 0 | 0 | The study is a cross-sectional survey on medication use during breastfeeding and does not report any pharmacokinetic parameters for cyproheptadine. |
| popPK | Nakijoba_2025_2 | irrelevant | 0 | 0 | The paper is a cross-sectional survey of medicine use during breastfeeding and only mentions cyproheptadine as a drug requiring cautious use, without reporting any pharmacokinetic parameters or models for it. |
| PGx | Ozdener_2005 | not_relevant | 1 | 5 | The paper reports a genetic effect on baseline platelet aggregation (38% higher in T/T) but explicitly states that the pharmacodynamic effect of cyproheptadine (inhibition of aggregation) was not influenced by the genotype. |
| popPK | Paluzzi_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study of a serotonin receptor in an insect, using cyproheptadine only as a pharmacological antagonist, not a PK study. |
| PGx | Peredy_2025 | not_relevant | 0 | 0 | The paper reports a drug-herb interaction (kava affecting cyproheptadine response) rather than a gene variant affecting the pharmacokinetics or pharmacodynamics of cyproheptadine. |
| popPK | Peters_1990 | irrelevant | 0 | 0 | The paper describes in vivo antimalarial efficacy (ED90) and in vitro activity, not pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for cyproheptadine. |
| popPK | Qiu_2012 | irrelevant | 0 | 0 | Cyproheptadine is used as a pharmacological tool (5-HT2 receptor antagonist) to block effects in a mechanistic study, not as the subject of pharmacokinetic analysis. |
| PGx | Ramoz_2007 | not_relevant | 0 | 0 | The paper is a general overview of eating disorder treatments and mentions cyproheptadine only as one of many tested agents, without reporting specific pharmacogenomic effects on its PK/PD. |
| popPK | Santamaría_2017 | irrelevant | 0 | 0 | The paper reports population PK parameters for rupatadine, not cyproheptadine. |
| popPK | Schaduangrat_2023 | irrelevant | 0 | 0 | The paper is a machine learning study for identifying estrogen receptor antagonists and contains no pharmacokinetic data for cyproheptadine. |
| popPK | Schlicker_1992 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of anpirtoline, using cyproheptadine only as a receptor antagonist to verify mechanism, with no PK parameters reported. |
| PGx | Scott_2007 | not_relevant | 2 | 2 | This is a case report attributing the effect to an acute drug-drug interaction (fluvoxamine) rather than a genetic polymorphism (CYP2D6 genotype). |
| popPK | Spilker_1975 | irrelevant | 0 | 0 | This study investigates pharmacodynamic smooth muscle relaxant activity and ED50 values, not quantitative pharmacokinetic disposition parameters (CL, V, half-life) for cyproheptadine. |
| PGx | Tuttle_2026 | not_relevant | 0 | 0 | The paper is a case report of serotonin toxicity treated with cyproheptadine, but it does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of cyproheptadine itself. |
| popPK | Venugopalan_1995 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology experiment using cyproheptadine as a receptor antagonist in catfish, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Villazón_2002 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology experiment using cyproheptadine as an antagonist, not a pharmacokinetic study. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study measuring cardiac electrophysiological effects (QT prolongation) and potency (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wilson_2018 | irrelevant | 0 | 0 | The paper is a methodological study on a drug safety/efficacy algorithm (PathFX) and mentions cyproheptadine only as a comparator for urticaria, containing no pharmacokinetic data. |
| popPK | Xin_1993 | irrelevant | 0 | 0 | The study reports in-vitro radical scavenging activity (EC50/IC50) and does not provide any pharmacokinetic disposition parameters (CL, V, t1/2, etc.). |
| PGx | Zhou_2002 | not_relevant | 0 | 0 | The paper focuses on DMXAA pharmacology and PK, and only mentions cyproheptadine as a co-administered drug in mouse models; it does not report gene variants affecting cyproheptadine PK/PD. |
| PGx | Zhou_2003 | not_relevant | 0 | 0 | The study focuses on interindividual variability in DMXAA metabolism using a liver bank and mentions cyproheptadine only as an inhibitor of CYP1A2/UGT enzymes; it does not report a pharmacogenomic effect of a gene variant on a PK/PD parameter of cyproheptadine itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
