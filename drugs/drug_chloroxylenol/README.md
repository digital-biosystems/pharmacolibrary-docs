<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;chloroxylenol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloroxylenol_Dorantes1992_reference&quot;,&quot;label&quot;:&quot;Dorantes_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# chloroxylenol

- **generic name:** chloroxylenol
- **ATC codes:** `D08AE05`
- **DrugBank:** [DB11121](https://go.drugbank.com/drugs/DB11121) · **PubChem:** [CID 2723](https://pubchem.ncbi.nlm.nih.gov/compound/2723)
- **molar mass:** 156.61 g/mol (C8H9ClO) — DrugBank
- **groups:** approved

## About

Chloroxylenol is an antiseptic and disinfectant used to treat or prevent local skin infections. It is widely used, including in household antiseptic products, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426460](https://www.wikidata.org/wiki/Q426460) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chloroxylenol | parent | 156.61 | C8H9ClO | DrugBank | [2723](https://pubchem.ncbi.nlm.nih.gov/compound/2723) | Dorantes_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:11 | 0:25 | 1/0/0 | 1/0/0 | 0/0/0 | 14,781/1,005 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.133). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Dorantes_1992_reference](drugs/drug_chloroxylenol/Chloroxylenol_Dorantes1992_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Dorantes A et al., Pharmacokinetic and metabolic dispositi…, Pharmaceutical research (1992) | [10.1023/a:1015814513373](https://doi.org/10.1023/a:1015814513373) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Han_2026_SRD5A1](drugs/drug_chloroxylenol/pd_Han_2026_SRD5A1.md) | human SRD5A1 activity (inhibition by chloroxylenol) ← chloroxylenol · inhibition effect | — | Han X et al., Differences between human and rat 5α-Re…, Chemico-biological interact… (2026) | [10.1016/j.cbi.2026.112186](https://doi.org/10.1016/j.cbi.2026.112186) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chloroxylenol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dorantes_1992.pdf` | Dorantes A et al., Pharmacokinetic and metabolic dispositi…, Pharmaceutical research (1992) | popPK | 10 | [10.1023/a:1015814513373](https://doi.org/10.1023/a:1015814513373) | [1608902](https://pubmed.ncbi.nlm.nih.gov/1608902) | Full PK parameters (t½, Vss, CL, bioavailability) for chloroxylenol are reported directly in the abstract. |
| `Hussien_2022.pdf` | Hussien RAA et al., Evaluation of the Fungicidal Effect of…, Plants (Basel, Switzerland) (2022) | pd | 4 | [10.3390/plants11243542](https://doi.org/10.3390/plants11243542) | [36559653](https://www.ncbi.nlm.nih.gov/pubmed/36559653) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T23:11:25.190904+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Galli_2025 | irrelevant | 0 | 0 | In-vitro anthelmintic screening study with no chloroxylenol PK parameters reported. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper reports high-throughput screening results for flavonoids and other compounds, but does not mention or analyze chloroxylenol. |
| popPK | Hussien_2022 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Hussien_2022 | not_relevant | 0 | 0 | The paper evaluates the fungicidal effect of disinfectants against a plant pathogen, which is not a pharmacodynamic study of a drug in a biological system (human/animal) with exposure-response or dose-response parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a cancer pharmacology/mechanism study of brusatol with no chloroxylenol PK parameters reported. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper investigates Brusatol, not chloroxylenol, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | This is a metabolomics/gut microbiota study of pulchinenoside B4 in oral ulcer rats; chloroxylenol is not the subject drug and no PK parameters appear. |
| PD | Luo_2024 | not_relevant | 0 | 0 | The paper studies Pulchinenoside B4, not chloroxylenol, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:11 UTC</sub>
