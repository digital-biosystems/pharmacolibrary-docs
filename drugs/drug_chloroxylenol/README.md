<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;chloroxylenol&quot;}]"></div>

# chloroxylenol

- **generic name:** chloroxylenol
- **ATC codes:** `D08AE05`
- **DrugBank:** [DB11121](https://go.drugbank.com/drugs/DB11121) · **PubChem:** [CID 2723](https://pubchem.ncbi.nlm.nih.gov/compound/2723)
- **molar mass:** 156.61 g/mol (C8H9ClO) — DrugBank
- **groups:** approved

## About

**Description.** Chloroxylenol, or para-chloro-meta-xylenol (PCMX), is an antiseptic and disinfectant agent used for skin disinfection and surgical instruments. It is found in antibacterial soaps, wound-cleansing applications, and household antiseptics. The halophenol is shown to be most effective against Gram positive bacteria where it disrupts the cell wall due to its phenolic nature [A1351]. Chloroxylenol is on the World Health Organization's List of Essential Medicines.

**Indication.** The predominant medical applications for which chloroxylenol is formally indicated for therapeutic use is as an application to the skin for use in cuts, bites, stings, abrasions, and for use as antiseptic hand cleaner [L1992].

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chloroxylenol | parent | 156.61 | C8H9ClO | DrugBank | [2723](https://pubchem.ncbi.nlm.nih.gov/compound/2723) | Dorantes_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 16:23 | 6:54 | 1/0/0 | 0/0/0 | 0/0/0 | 54,218/7,378 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.133). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span> | [Dorantes_1992_reference](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md) | model (no simulator) | 1-compartment, IV | 5 | Dorantes A et al., Pharmacokinetic and metabolic dispositi…, Pharmaceutical research (1992) | [10.1023/a:1015814513373](https://doi.org/10.1023/a:1015814513373) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chloroxylenol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>“…well-absorbed when applied to the skin…”</sub> | prose |
| metabolism | kidney | <sub>“…excreted via the kidney with almost complete elimination within 24 hours…”</sub> | prose |
| metabolism | liver | <sub>“…extensively metabolized by the liver…”</sub> | prose |
| metabolism | skeletal muscle | <sub>“…one human subject administered 5 mg intragluteally…”</sub> | prose |
| metabolism | skin | <sub>“…following dermal application of chloroxylenol, that the absorption was rapid…”</sub> | prose |
| excretion | bile duct | <sub>“…some amounts may be found in bile…”</sub> | prose |
| excretion | kidney | <sub>“…The major route of excretion is likely in urine…”</sub> | prose |
| excretion | lung | <sub>“…traces in exhaled air…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dorantes_1992.pdf` | Dorantes A et al., Pharmacokinetic and metabolic dispositi…, Pharmaceutical research (1992) | popPK | 10 | [10.1023/a:1015814513373](https://doi.org/10.1023/a:1015814513373) | [1608902](https://pubmed.ncbi.nlm.nih.gov/1608902) | The paper reports quantitative pharmacokinetic parameters (CL, Vss, t1/2) for chloroxylenol (PCMX) in dogs, with all numeric values explicitly present in the text. |
| `Hussien_2022.pdf` | Hussien RAA et al., Evaluation of the Fungicidal Effect of…, Plants (Basel, Switzerland) (2022) | pd | 4 | [10.3390/plants11243542](https://doi.org/10.3390/plants11243542) | [36559653](https://www.ncbi.nlm.nih.gov/pubmed/36559653) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-29T16:20:07.035993+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Galli_2025 | irrelevant | 0 | 0 | The paper is a high-throughput screening study for anthelmintic activity and does not involve chloroxylenol or report any pharmacokinetic parameters. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper reports high-throughput screening results for flavonoids and other compounds, but does not mention or analyze chloroxylenol. |
| popPK | Hussien_2022 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Hussien_2022 | not_relevant | 0 | 0 | The paper evaluates the fungicidal effect of disinfectants against a plant pathogen, which is not a pharmacodynamic study of a drug in a biological system (human/animal) with exposure-response or dose-response parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper studies the drug Brusatol in meningioma models and does not involve chloroxylenol or report any pharmacokinetic parameters. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper investigates Brusatol, not chloroxylenol, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | The study investigates the effects of Pulchinenoside B4 on oral ulcers in rats using metabolomics and microbiota analysis, and does not report pharmacokinetic parameters for chloroxylenol. |
| PD | Luo_2024 | not_relevant | 0 | 0 | The paper studies Pulchinenoside B4, not chloroxylenol, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 16:20 UTC</sub>
