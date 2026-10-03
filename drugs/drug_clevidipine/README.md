<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;clevidipine&quot;}]"></div>

# clevidipine

- **generic name:** clevidipine
- **ATC codes:** `C08CA16`
- **DrugBank:** [DB04920](https://go.drugbank.com/drugs/DB04920) · **PubChem:** [CID 153994](https://pubchem.ncbi.nlm.nih.gov/compound/153994)
- **molar mass:** 456.316 g/mol (C21H23Cl2NO6) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Clevidipine is a dihydropyridine L-type calcium channel blocker that is selective for vascular smooth muscle and is indicated for blood pressure reduction when oral therapy is not an option.

**Indication.** For the reduction of blood pressure when when oral antihypertensive therapy is not feasible or not desirable.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clevidipine | parent | 456.316 | C21H23Cl2NO6 | DrugBank | [153994](https://pubchem.ncbi.nlm.nih.gov/compound/153994) | Bailey_2002, Ericsson_1999_2, Ericsson_1999_3, Ericsson_2001, Vuylsteke_2000 |
| H 152/81 | metabolite | 356.199 | C16H15Cl2NO4 | PubChem | [2794058](https://pubchem.ncbi.nlm.nih.gov/compound/2794058) | Ericsson_1999_2, Ericsson_1999_3 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 08:05 | 18:51 | 3/2/0 | 0/0/0 | 0/0/0 | 97,712/26,334 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> | [Bailey_2002_reference](drugs/drug_clevidipine/Clevidipine_Bailey2002_reference.md) | model (no simulator) | 1-compartment, IV | 3 | Bailey JM et al., Clevidipine in adult cardiac surgical p…, Anesthesiology (2002) | [10.1097/00000542-200205000-00010](https://doi.org/10.1097/00000542-200205000-00010) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span> | [Ericsson_2001_reference](drugs/drug_clevidipine/Clevidipine_Ericsson2001_reference.md) | model (no simulator) | 1-compartment, IV | 2 | Ericsson H et al., Enantioselective pharmacokinetics of th…, Chirality (2001) | [10.1002/1520-636X(2001)13:3&lt;130::AID-CHIR1009&gt;3.0.CO;2-2](https://doi.org/10.1002/1520-636X(2001)13:3&lt;130::AID-CHIR1009&gt;3.0.CO;2-2) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Vuylsteke_2000_reference](drugs/drug_clevidipine/Clevidipine_Vuylsteke2000_reference.md) | model (no simulator) | 1-compartment, IV | 3 | Vuylsteke A et al., Pharmacokinetics and pulmonary extracti…, British journal of anaesthe… (2000) | [10.1093/bja/85.5.683](https://doi.org/10.1093/bja/85.5.683) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.214). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ericsson_1999_2_reference](drugs/drug_clevidipine/Clevidipine_Ericsson1999v2_reference.md) | — | parent + metabolite (no model) | 5 | Ericsson H et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1999) | [10.1007/s002280050594](https://doi.org/10.1007/s002280050594) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ericsson_1999_3_reference](drugs/drug_clevidipine/Clevidipine_Ericsson1999v3_reference.md) | — | general linear (no model) | 2 | Ericsson H et al., Pharmacokinetics of new calcium channel…, Drug metabolism and disposi… (1999) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clevidipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…feces 7-22%…”</sub> | prose |
| excretion | kidney | <sub>“…urine 63-74%…”</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (blocker), CACNA1D (blocker), CACNA1F (blocker), CACNA1S (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 3  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bailey_2002.pdf` | Bailey JM et al., Clevidipine in adult cardiac surgical p…, Anesthesiology (2002) | popPK | 10 | [10.1097/00000542-200205000-00010](https://doi.org/10.1097/00000542-200205000-00010) | [11981147](https://pubmed.ncbi.nlm.nih.gov/11981147) | The abstract explicitly reports quantitative population PK parameters for clevidipine, including a three-compartment model, volume of distribution (32.4 l), clearance (4.3 l/min), and half-life (0.6 min). |
| `Ericsson_1999_2.pdf` | Ericsson H et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1999) | popPK | 10 | [10.1007/s002280050594](https://doi.org/10.1007/s002280050594) | [10206087](https://pubmed.ncbi.nlm.nih.gov/10206087) | The paper reports quantitative PK parameters (clearance, volume, half-lives) for clevidipine in healthy volunteers with values explicitly stated in the text. |
| `Ericsson_1999_3.pdf` | Ericsson H et al., Pharmacokinetics of new calcium channel…, Drug metabolism and disposi… (1999) | popPK | 10 | not captured | [10220482](https://pubmed.ncbi.nlm.nih.gov/10220482) | The paper reports quantitative PK parameters (half-life, Emax, EC50) for clevidipine in animals, with specific numeric values provided in the abstract text. |
| `Ericsson_2001.pdf` | Ericsson H et al., Enantioselective pharmacokinetics of th…, Chirality (2001) | popPK | 10 | [10.1002/1520-636X(2001)13:3&lt;130::AID-CHIR1009&gt;3.0.CO;2-2](https://doi.org/10.1002/1520-636X(2001)13:3<130::AID-CHIR1009>3.0.CO;2-2) | [11270321](https://pubmed.ncbi.nlm.nih.gov/11270321) | The study reports quantitative population PK parameters (clearance, volume of distribution, half-life) for clevidipine enantiomers in humans, with specific numeric values provided in the text. |
| `Vuylsteke_2000.pdf` | Vuylsteke A et al., Pharmacokinetics and pulmonary extracti…, British journal of anaesthe… (2000) | popPK | 10 | [10.1093/bja/85.5.683](https://doi.org/10.1093/bja/85.5.683) | [11094580](https://pubmed.ncbi.nlm.nih.gov/11094580) | The text explicitly reports quantitative pharmacokinetic parameters for clevidipine, including clearance (0.055 and 0.03 L/min/kg), volume of distribution (0.19 L/kg), and half-lives (0.7 and 2.3 min). |
| `Schwieler_1999.pdf` | Schwieler JH et al., Circulatory effects and pharmacology of…, Journal of cardiovascular p… (1999) | popPK | 9 | [10.1097/00005344-199908000-00013](https://doi.org/10.1097/00005344-199908000-00013) | [10445679](https://pubmed.ncbi.nlm.nih.gov/10445679) | The abstract explicitly reports quantitative pharmacokinetic parameters for clevidipine, including clearance (described as extremely high), volume of distribution (small), and specific half-life values (2.2 and 16.8 min). |
| `Ericsson_1999.pdf` | Ericsson H et al., Clinical and pharmacokinetic results wi…, British journal of clinical… (1999) | pd | 5 | [10.1046/j.1365-2125.1999.00933.x](https://doi.org/10.1046/j.1365-2125.1999.00933.x) | [10336577](https://www.ncbi.nlm.nih.gov/pubmed/10336577) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-29T07:50:18.655124+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aronson_2008 | not_relevant | 0 | 0 | The paper reports clinical trial results comparing the safety and efficacy of clevidipine to other antihypertensives, but it does not investigate or report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Cobb_2018 | not_relevant | 0 | 0 | The paper is a review of therapeutic interchange strategies for sodium nitroprusside and does not report any pharmacogenomic effects on clevidipine PK/PD parameters. |
| PGx | Cobb_2018_2 | not_relevant | 0 | 0 | The paper is a review of therapeutic interchange strategies for cost containment and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Ericsson_1999 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| PGx | Freiberger_2016 | not_relevant | 0 | 0 | The paper compares the efficacy and safety of clevidipine versus sodium nitroprusside in a clinical cohort but does not report any pharmacogenomic analysis or gene variant effects on PK/PD parameters. |
| popPK | Hassanain_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of vascular function (EC50) and does not report pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Huraux_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of vasodilator effects on human arteries, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ulici_2017 | not_relevant | 0 | 0 | The study compares the efficacy and cost of clevidipine versus sodium nitroprusside in aortic dissection but does not investigate any gene variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Zhang_2006 | not_relevant | 0 | 0 | The paper investigates the potential of clevidipine to induce or inhibit CYP enzymes (drug-drug interaction potential) but does not report how genetic variants affect the PK or PD of clevidipine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 07:50 UTC</sub>
