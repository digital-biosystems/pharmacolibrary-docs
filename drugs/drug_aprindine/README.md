<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;aprindine&quot;}]"></div>

# aprindine

- **generic name:** aprindine
- **ATC codes:** `C01BB04`
- **DrugBank:** [DB01429](https://go.drugbank.com/drugs/DB01429) · **PubChem:** [CID 2218](https://pubchem.ncbi.nlm.nih.gov/compound/2218)
- **molar mass:** 322.487 g/mol (C22H30N2) — DrugBank
- **groups:** experimental

## About

Aprindine is an antiarrhythmic drug of class Ib, used to treat heart rhythm disorders associated with heart disease. It is considered experimental and is not authorised in the European Union, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q263612](https://www.wikidata.org/wiki/Q263612) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aprindine | parent | 322.487 | C22H30N2 | DrugBank | [2218](https://pubchem.ncbi.nlm.nih.gov/compound/2218) | Kobari_1984 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 16:01 | 9:07 | 0/1/0 | 0/0/0 | 0/0/1 | 131,355/5,937 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 15/2 | 8/10 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kobari_1984_reference](drugs/drug_aprindine/Aprindine_Kobari1984_reference.md) | — | 1-compartment (no model) | 1 | Kobari T et al., Dose-dependent pharmacokinetics of apri…, European journal of clinica… (1984) | [10.1007/BF00546721](https://doi.org/10.1007/BF00546721) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Ebner_1993](drugs/drug_aprindine/pgx_Ebner_1993_CYP2D6_Q27.md) | Ebner T et al., The metabolism of aprindine in relation…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb04161.x](https://doi.org/10.1111/j.1365-2125.1993.tb04161.x) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aprindine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` metabolism/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALM1 (inhibitor), CALM2 (inhibitor), CALM3 (inhibitor), SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 14  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_1981.pdf` | de Suray JM et al., Pharmacokinetic study of aprindine and…, International journal of cl… (1981) | popPK | 10 | not captured | [7251236](https://pubmed.ncbi.nlm.nih.gov/7251236) | The study reports quantitative PK parameters for aprindine in dogs, but the specific numeric values for clearance, volume, and rate constants are described qualitatively (e.g., "similar", "twice as high") without explicit numbers in the provided text. |
| `Matsumoto_1990.pdf` | Matsumoto N et al., [Effects of intravenous aprindine on he…, Kokyu to junkan. Respiratio… (1990) | popPK | 8 | not captured | [1694595](https://pubmed.ncbi.nlm.nih.gov/1694595) | The study reports quantitative PK parameters for aprindine in humans, specifically the elimination half-life (18.9 +/- 8.4 hours) and plasma concentration-time data, though it lacks explicit clearance or volume of distribution values. |
| `Wirth_1983.pdf` | Wirth KE et al., [Detection of aprindine and its metabol…, Herz (1983) | popPK | 8 | not captured | [6642401](https://pubmed.ncbi.nlm.nih.gov/6642401) | The study reports a two-compartment model and elimination half-lives (37h plasma, 31h urine) for aprindine in humans, but lacks explicit values for clearance, volume of distribution, or absorption rate constants. |
| `Nawada_1994.pdf` | Nawada T et al., Evaluation of negative inotropic and an…, International journal of cl… (1994) | pd | 4 | not captured | [7952796](https://www.ncbi.nlm.nih.gov/pubmed/7952796) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-08T16:01:12.262876+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_1986 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic classification of antiarrhythmic drugs and contains no pharmacokinetic data or quantitative disposition parameters for aprindine. |
| popPK | Hashimoto_1991 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of a different drug (TYB-3823) in dogs, mentioning aprindine only as a comparator for its antiarrhythmic profile. |
| popPK | Hiiro_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of negative inotropic effects in guinea pig tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Honerjäger_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of negative inotropic effects on guinea-pig papillary muscles and does not report pharmacokinetic parameters for aprindine. |
| popPK | Honerjäger_1986_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of negative inotropic and electrophysiological effects in guinea-pig papillary muscles, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for aprindine. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a general automated pipeline for generating initial PK estimates and uses other drugs (e.g., cefaclor, ceftriaxone) for validation, with no data or parameters reported for aprindine. |
| popPK | Huang_2025_2 | irrelevant | 0 | 0 | The paper describes a general method for calculating initial PK estimates and uses various drugs (e.g., ceftriaxone, vancomycin) as test cases, but does not study aprindine. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated PopPK modeling using 22 datasets, and aprindine is only mentioned in a reference list without any associated data or parameters. |
| popPK | Kobayashi_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP1A2 inhibition by antiarrhythmic drugs, not a pharmacokinetic study reporting disposition parameters for aprindine. |
| PGx | Kobayashi_1998 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP1A2 inhibition) and does not report any pharmacogenomic effects (gene variants) on the PK or PD of aprindine. |
| popPK | Komatsu_2015 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for digoxin, not aprindine (which is only listed as a concomitant medication). |
| popPK | Lesko_1989 | irrelevant | 1 | 0 | The paper is a review of amiodarone drug interactions where aprindine is only a co-administered drug, and no quantitative PK parameters (CL, V, t1/2) for aprindine are reported. |
| popPK | Mannhold_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calmodulin inhibition and lipophilicity, not a pharmacokinetic study. |
| popPK | Matsuo_2000 | irrelevant | 0 | 0 | The study focuses on propiverine and other anticholinergics in mice, with aprindine mentioned only as a prior comparator for receptor binding, not as the subject of PK analysis. |
| PD | Matsuo_2000 | not_relevant | 1 | 0 | The paper focuses on propiverine and other drugs, mentioning aprindine only in the context of previous work without providing any new numeric PD parameters or exposure-response data for aprindine. |
| popPK | Nawada_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and mechanistic evaluation of negative inotropic effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ohmoto-Sekine_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of aprindine's mechanism of action on ion channels in guinea-pig cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sakuta_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel blockade in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Taguchi_2006 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bepridil, with aprindine serving only as a co-administered inhibitor/comparator, not as the subject drug. |
| PGx | Taguchi_2006 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for bepridil, not aprindine; aprindine is only mentioned as a co-administered drug affecting bepridil clearance. |
| popPK | Tamura_2009 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel inhibition (IC50) and does not report pharmacokinetic disposition parameters for aprindine. |
| popPK | Tanaka_1990 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Watanabe_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of aprindine's mechanism of action on Na+/Ca2+ exchangers, reporting IC50 values rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Wirth_1983 | relevant | 8 | 4 | The study reports a two-compartment model and elimination half-lives (37h plasma, 31h urine) for aprindine in humans, but lacks explicit values for clearance, volume of distribution, or absorption rate constants. |
| popPK | de_1981 | relevant | 10 | 2 | The study reports quantitative PK parameters for aprindine in dogs, but the specific numeric values for clearance, volume, and rate constants are described qualitatively (e.g., "similar", "twice as high") without explicit numbers in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-08 15:53 UTC</sub>
