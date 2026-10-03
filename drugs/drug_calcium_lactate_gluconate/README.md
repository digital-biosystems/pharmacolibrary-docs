<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12A&quot;,&quot;href&quot;:&quot;atc/A12A.md&quot;},{&quot;label&quot;:&quot;calcium lactate gluconate&quot;}]"></div>

# calcium lactate gluconate

- **generic name:** calcium lactate gluconate
- **ATC codes:** `A12AA06`
- **DrugBank:** [DB13365](https://go.drugbank.com/drugs/DB13365) · **PubChem:** not captured
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 00:01 | 2:49 | 0/0/0 | 0/0/0 | 0/0/0 | 9,850/578 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 3/4 | 6/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 35 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ansari_2025.pdf` | Ansari JR et al., Bioequivalence and Pharmacokinetics of…, Anesthesiology (2025) | popPK | 10 | [10.1097/ALN.0000000000005248](https://doi.org/10.1097/ALN.0000000000005248) | [39361822](https://pubmed.ncbi.nlm.nih.gov/39361822) | The paper reports a population pharmacokinetic model for calcium gluconate with explicit numeric values for clearance, volume, and half-life in the text. |

<sub>queue written 2026-09-30T00:01:08.739483+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Almurisi_2020 | not_relevant | 0 | 0 | The paper focuses on the formulation and palatability of a paracetamol jelly; calcium lactate gluconate is used only as a gelling agent, and no pharmacodynamic or exposure-response data are reported. |
| popPK | BERNSTEIN_1962 | irrelevant | 2 | 1 | The study measures renal clearance of calcium (a physiological/renal function parameter) rather than pharmacokinetic disposition parameters (CL, V, ka) for the drug calcium lactate gluconate, and the specific drug form is not the subject. |
| popPK | Bateman_2016 | irrelevant | 0 | 0 | The paper is a conference abstract collection on sepsis and critical care with no mention of calcium_lactate_gluconate pharmacokinetics. |
| popPK | Belolipetskaia_2011 | irrelevant | 0 | 0 | The study focuses on paracetamol, rimantadine, and loratadine, with calcium gluconate listed only as a minor component without any reported pharmacokinetic parameters. |
| popPK | Benny_2026 | irrelevant | 0 | 0 | The study is a clinical observation of hypocalcemia incidence during plasma exchange and does not report pharmacokinetic parameters (CL, V, etc.) for calcium lactate gluconate. |
| popPK | Block_2012 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of denosumab, not calcium_lactate_gluconate, which is only mentioned as a treatment for adverse events. |
| popPK | Chu_2001 | irrelevant | 0 | 0 | The study focuses on bone markers and acid-base balance, using calcium gluconate only to maintain calcium levels, and does not report pharmacokinetic parameters for the drug. |
| popPK | Dodion_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of torasemide and furosemide, with calcium gluconate used only as a compensatory infusion, not as the subject drug. |
| popPK | Dong_2026 | irrelevant | 0 | 0 | The study focuses on melatonin delivery using calcium gluconate as a formulation excipient, not on the pharmacokinetics of calcium_lactate_gluconate. |
| popPK | Farkas_2018 | irrelevant | 0 | 0 | The paper is a clinical case report on fluoride poisoning treatment and does not report pharmacokinetic parameters for calcium lactate gluconate. |
| popPK | Feng_1994 | irrelevant | 0 | 0 | The study focuses on renal physiology and parathyroid hormone responses in chickens, using calcium gluconate only as a tool to block PTH secretion rather than as the subject of a pharmacokinetic analysis. |
| popPK | Han_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oxaliplatin, with calcium gluconate serving only as a co-administered agent to assess its impact on oxaliplatin clearance, not as the subject drug. |
| popPK | Jensen-Fangel_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nelfinavir and its metabolite M8, using calcium supplements only as a co-administered agent to treat diarrhea, rather than as the subject drug for PK parameter estimation. |
| popPK | Kaisbain_2023 | irrelevant | 0 | 0 | The paper is a case report describing the clinical use of calcium gluconate to treat verapamil-induced hypotension and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for calcium gluconate. |
| popPK | Kanaris_2026 | irrelevant | 0 | 0 | The paper is a narrative review comparing calcium gluconate and calcium chloride, and it does not report quantitative pharmacokinetic parameters (such as clearance, volume, or half-life) for calcium_lactate_gluconate. |
| PD | Kim_2013 | not_relevant | 0 | 0 | The paper is an acute toxicity study reporting no adverse effects up to 2000 mg/kg and an LD50 &gt; 2000 mg/kg, but it does not report any pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for calcium lactate gluconate. |
| popPK | Kotchen_1977 | irrelevant | 0 | 0 | The study investigates the physiological effect of calcium gluconate infusion on renin release in dogs, not its pharmacokinetic disposition parameters. |
| popPK | Mandal_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxytetracycline, with calcium gluconate serving only as a co-administered agent to induce hypercalcemia, not as the subject drug. |
| popPK | McCabe_2026 | irrelevant | 0 | 0 | The paper is a clinical outcomes study on hospital resource utilization in poisoning cases and does not report any pharmacokinetic parameters for calcium lactate gluconate. |
| popPK | Misawa_1985 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content or pharmacokinetic data for calcium_lactate_gluconate. |
| popPK | Miyazaki_2003 | irrelevant | 0 | 0 | The study focuses on salmon calcitonin and calcium gluconate (not calcium lactate gluconate) in rats, and does not report PK parameters for the target drug. |
| popPK | Nowak_2008 | irrelevant | 2 | 0 | The study compares calcium fumarate and calcium gluconate (not calcium lactate gluconate) and reports only bioequivalence metrics (AUC, Cmax) without compartmental PK parameters like clearance or volume. |
| popPK | Pearigen_1991 | irrelevant | 0 | 0 | The paper is a review of calcium antagonist poisoning where calcium gluconate is mentioned only as a therapeutic agent, not as the subject of a pharmacokinetic study. |
| popPK | Pyrpasopoulos_1983 | irrelevant | 0 | 0 | The study investigates the effect of calcium gluconate on glucose tolerance in uraemic patients and does not report any pharmacokinetic parameters for calcium_lactate_gluconate. |
| popPK | Sansoè_2007 | irrelevant | 0 | 0 | The study investigates the physiological effects of calcium infusion on renal sodium handling in cirrhosis and does not report pharmacokinetic parameters (CL, V, ka) for calcium lactate gluconate. |
| popPK | Seeling_1985 | irrelevant | 0 | 0 | The text is a general review of water and electrolyte imbalances that mentions calcium gluconate only as a therapeutic agent for hyperkalemia, without reporting any pharmacokinetic parameters. |
| popPK | Suzuki_2009 | irrelevant | 0 | 0 | The paper is a clinical case report describing the treatment of hyperkalemia with calcium gluconate, but it does not report any pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Thompson_1984 | irrelevant | 0 | 0 | The paper is a clinical case report on primary hyperparathyroidism in dogs and does not report pharmacokinetic parameters for calcium lactate gluconate. |
| popPK | Torrance_1989 | irrelevant | 0 | 0 | The study focuses on parathormone assay validation and parathyroid function testing in dogs, using calcium gluconate only as a stimulus for PTH suppression, not as a subject drug for pharmacokinetic analysis. |
| popPK | Warneke_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride from sodium monofluorophosphate, not calcium_lactate_gluconate. |
| popPK | Warneke_1993_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride from glutamine monofluorophosphate, not calcium_lactate_gluconate. |
| popPK | Yang_2010 | irrelevant | 0 | 0 | The paper is an in-vitro antibacterial study where calcium gluconate is used only as a reagent for gel preparation, not as a subject drug for pharmacokinetic analysis. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of Huashi Pill on renal stones in rats, using calcium gluconate only as a model inducer, and does not report pharmacokinetic parameters for calcium_lactate_gluconate. |
| popPK | de_2025 | irrelevant | 0 | 0 | The paper is a case report on sotalol overdose where calcium gluconate is only a co-administered treatment, and no PK parameters for calcium lactate gluconate are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
