<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03B&quot;,&quot;href&quot;:&quot;atc/B03B.md&quot;},{&quot;label&quot;:&quot;cyanocobalamin&quot;}]"></div>

# cyanocobalamin

- **generic name:** cyanocobalamin
- **ATC codes:** `B03BA01`
- **DrugBank:** [DB00115](https://go.drugbank.com/drugs/DB00115) · **PubChem:** [CID 70678590](https://pubchem.ncbi.nlm.nih.gov/compound/70678590)
- **molar mass:** 1355.3652 g/mol (C63H88CoN14O14P) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Cyanocobalamin, a form of vitamin B12, is used to treat and prevent vitamin B12 deficiency, including pernicious anemia and certain neuropathies. It is an approved medicine and nutraceutical, widely used as a vitamin B12 supplement and antianemic preparation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q252251](https://www.wikidata.org/wiki/Q252251) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cyanocobalamin | parent | 1355.37 | C63H88CoN14O14P | DrugBank | [70678590](https://pubchem.ncbi.nlm.nih.gov/compound/70678590) | Nava-Ocampo_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:41 | 2:33 | 0/1/0 | 0/0/0 | 0/0/0 | 36,769/5,420 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nava-Ocampo_2005_reference](drugs/drug_cyanocobalamin/Cyanocobalamin_NavaOcampo2005_reference.md) | — | 1-compartment (no model) | 0 | Nava-Ocampo AA et al., Pharmacokinetics of high doses of cyano…, Clinical and experimental p… (2005) | [10.1111/j.1440-1681.2005.04145.x](https://doi.org/10.1111/j.1440-1681.2005.04145.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cyanocobalamin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood-brain barrier | `ABCC1` unknown | DrugBank actor |
| distribution | lung | `ABCC1` unknown | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AMN (substrate), CBLIF (substrate), CUBN (substrate), LRP2 (unknown), MMAA (binder), MMAB (substrate), MMACHC (cofactor), MMUT (cofactor), MTHFR (cofactor), MTR (cofactor), MTRR (cofactor), Pancreatic proteases (substrate), TCN1 (substrate), TCN2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 24 returned
- **screened:** 7  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nava-Ocampo_2005.pdf` | Nava-Ocampo AA et al., Pharmacokinetics of high doses of cyano…, Clinical and experimental p… (2005) | popPK | 10 | [10.1111/j.1440-1681.2005.04145.x](https://doi.org/10.1111/j.1440-1681.2005.04145.x) | [15730428](https://pubmed.ncbi.nlm.nih.gov/15730428) | The study reports quantitative PK parameters (half-life, clearance, volume of distribution) for cyanocobalamin in rats, with specific numeric ranges provided in the abstract. |
| `Sivadas_2025.pdf` | Sivadas A et al., Novel genetic variants associated with…, The American journal of cli… (2025) | popPK | 9 | [10.1016/j.ajcnut.2025.08.005](https://doi.org/10.1016/j.ajcnut.2025.08.005) | [40840787](https://pubmed.ncbi.nlm.nih.gov/40840787) | The study uses a 2-compartment pharmacokinetic model for cyanocobalamin, but specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract, only the derived bioavailability percentage. |
| `Devi_2020.pdf` | Devi S et al., Measuring vitamin B-12 bioavailability…, The American journal of cli… (2020) | popPK | 8 | [10.1093/ajcn/nqaa221](https://doi.org/10.1093/ajcn/nqaa221) | [32844171](https://pubmed.ncbi.nlm.nih.gov/32844171) | The study reports a 2-compartment model for cyanocobalamin bioavailability in humans, but specific numeric PK parameters (CL, V, ka) are not listed in the provided text, only bioavailability percentages. |
| `Kurpad_2023.pdf` | Kurpad AV et al., Bioavailability and daily requirement o…, The American journal of cli… (2023) | popPK | 8 | [10.1016/j.ajcnut.2023.08.020](https://doi.org/10.1016/j.ajcnut.2023.08.020) | [38044024](https://pubmed.ncbi.nlm.nih.gov/38044024) | The study reports quantitative PK parameters (bioavailability, lag time, excretion rate) derived from a 2-compartmental model for cyanocobalamin in humans, but specific clearance/volume values are not explicitly listed in the text. |
| `Egler_2023.pdf` | Egler SG et al., Acute toxicity of single and combined r…, Ecotoxicology and environme… (2023) | pd | 5 | [10.1016/j.ecoenv.2023.114538](https://doi.org/10.1016/j.ecoenv.2023.114538) | [36652740](https://www.ncbi.nlm.nih.gov/pubmed/36652740) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-05T20:38:58.793999+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ackermann_2010 | not_relevant | 0 | 0 | The paper reports a clinical case of methotrexate toxicity and does not analyze the pharmacokinetics or pharmacodynamics of cyanocobalamin. |
| PGx | Corghi_2002 | not_relevant | 2 | 5 | The paper reports the effect of MTHFR genotype on homocysteine levels (a biomarker/PD parameter of the metabolic pathway) and the effect of B12 supplementation on homocysteine, but it does not report a pharmacogenomic effect on the PK or PD parameters of cyanocobalamin itself (e.g., B12 clearance or B12 concentration response to genotype). |
| popPK | Devi_2020 | relevant | 8 | 2 | The study reports a 2-compartment model for cyanocobalamin bioavailability in humans, but specific numeric PK parameters (CL, V, ka) are not listed in the provided text, only bioavailability percentages. |
| PGx | Dierkes_1999 | not_relevant | 3 | 5 | The paper reports a trend suggesting MTHFR genotype influences the PD response (homocysteine reduction) to cyanocobalamin, but it does not provide a fitted quantitative effect size or definitive pharmacogenomic parameter estimation. |
| popPK | Egler_2023 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of rare earth elements in Daphnia, where cyanocobalamin is used only as a chelator in the test medium, not as the subject drug for PK analysis. |
| PD | Egler_2023 | not_relevant | 0 | 0 | The paper studies the acute toxicity of rare earth elements (La, Nd, Sm) on Daphnia similis; cyanocobalamin is only mentioned as a chelator in the assay medium, and no pharmacodynamic or exposure-response relationship for cyanocobalamin is reported. |
| PGx | Ferrazzi_2005 | not_relevant | 0 | 0 | The study investigates the association between MTHFR genotype and homocysteine levels in retinal vein occlusion patients, but does not report pharmacokinetic or pharmacodynamic parameters of cyanocobalamin. |
| PGx | Fofou-Caillierez_2013 | not_relevant | 2 | 5 | The paper describes a rare inherited metabolic disorder (cblG-variant) affecting the intracellular processing of cyanocobalamin, rather than a pharmacogenomic effect on the PK/PD of cyanocobalamin as a therapeutic drug in a general population. |
| PGx | Gherasim_2013 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of intracellular cobalamin trafficking and protein-protein interactions in inborn errors of metabolism, not the pharmacokinetics or pharmacodynamics of exogenous cyanocobalamin administration. |
| PGx | Hannah-Shmouni_2018 | not_relevant | 2 | 5 | The paper reports clinical outcomes and biochemical normalization in patients with a genetic defect, but does not quantify specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, EC50) of cyanocobalamin. |
| PGx | Kaur_2021 | not_relevant | 0 | 0 | The paper discusses folic acid as a placebo in hydroxychloroquine trials and mentions cyanocobalamin only in the context of a separate combination therapy study, without reporting any pharmacogenomic effects on cyanocobalamin PK/PD. |
| popPK | Kurpad_2023 | relevant | 8 | 4 | The study reports quantitative PK parameters (bioavailability, lag time, excretion rate) derived from a 2-compartmental model for cyanocobalamin in humans, but specific clearance/volume values are not explicitly listed in the text. |
| PGx | Lanska_2010 | not_relevant | 0 | 0 | The text is a historical review of B vitamin deficiency disorders and does not report pharmacogenomic effects on the PK or PD of cyanocobalamin. |
| PGx | Lioudyno_2024 | not_relevant | 0 | 0 | The paper reports on vitamin B9 (folate) levels and folate cycle gene polymorphisms, not cyanocobalamin (vitamin B12) pharmacokinetics or pharmacodynamics. |
| PGx | Longo_2026 | not_relevant | 0 | 0 | The paper investigates the structural and thermodynamic effects of a mutation on protein-cobalamin binding, not the pharmacokinetic or pharmacodynamic parameters of cyanocobalamin in a biological system. |
| PGx | Paul_2017 | not_relevant | 2 | 0 | The paper is a narrative review discussing general B12 forms and genetic polymorphisms qualitatively, without reporting specific quantitative pharmacokinetic or pharmacodynamic effect sizes for cyanocobalamin. |
| PGx | Refsum_2006 | not_relevant | 2 | 5 | The paper reports an association between TCN2 genotype and total transcobalamin levels, but does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on cyanocobalamin itself. |
| PGx | Saviola_2018 | not_relevant | 0 | 0 | The paper reports a clinical adverse event (paraparesis) associated with MTHFR polymorphisms and methotrexate, but does not report changes in the pharmacokinetic or pharmacodynamic parameters of cyanocobalamin. |
| popPK | Sivadas_2025 | relevant | 9 | 2 | The study uses a 2-compartment pharmacokinetic model for cyanocobalamin, but specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract, only the derived bioavailability percentage. |
| PGx | Sunebo_2026 | not_relevant | 0 | 0 | The paper reports an association between sertraline and MADD, not a pharmacogenomic effect on cyanocobalamin PK/PD. |
| PGx | Vaisbich_2017 | not_relevant | 0 | 0 | The paper describes a clinical case of methionine synthase deficiency and treatment response, but does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of cyanocobalamin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 20:39 UTC</sub>
