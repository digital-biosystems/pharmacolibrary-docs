<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;etofylline nicotinate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;EtofyllineNicotinate_Zuidema1981_reference&quot;,&quot;label&quot;:&quot;Zuidema_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_etofylline_nicotinate/EtofyllineNicotinate_Zuidema1981_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# etofylline nicotinate

- **generic name:** etofylline nicotinate
- **ATC codes:** `C04AD04`
- **DrugBank:** [DB13842](https://go.drugbank.com/drugs/DB13842) · **PubChem:** not captured
- **molar mass:** 329.316 g/mol (C15H15N5O4) — DrugBank
- **groups:** experimental

## About

Etofylline nicotinate is a purine-derivative compound classified as a peripheral vasodilator, indicating use for circulatory problems in the limbs. It appears only as an experimental drug and is not an approved medicine in the European Union, so its current use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15408405](https://www.wikidata.org/wiki/Q15408405) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clofibric acid | metabolite | 214.645 | C10H11ClO3 | PubChem | [2797](https://pubchem.ncbi.nlm.nih.gov/compound/2797) | Lücker_1980 |
| etofylline | metabolite | 224.22 | C9H12N4O3 | PubChem | [1892](https://pubchem.ncbi.nlm.nih.gov/compound/1892) | Lücker_1980, Zuidema_1981 |
| etofylline clofibrate | metabolite | 420.85 | C19H21ClN4O5 | PubChem | [41109](https://pubchem.ncbi.nlm.nih.gov/compound/41109) | Lücker_1980 |
| etofylline_nicotinate | metabolite | 329.316 | C15H15N5O4 | DrugBank | — | Zuidema_1981 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:08 | 3:39 | 1/1/0 | 0/0/0 | 0/0/0 | 33,456/12,668 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.158). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zuidema_1981_reference](drugs/drug_etofylline_nicotinate/EtofyllineNicotinate_Zuidema1981_reference.md) | ▶ model + simulator | 1-compartment, IV | 6 | Zuidema J et al., Pharmacokinetics of etofylline after in…, International journal of cl… (1981) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lücker_1980_reference](drugs/drug_etofylline_nicotinate/EtofyllineNicotinate_Lcker1980_reference.md) | — | general linear (no model) | 1 | Lücker PW et al., [Metabolism and pharmacokinetics of eto…, Arzneimittel-Forschung (1980) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zuidema_1981.pdf` | Zuidema J et al., Pharmacokinetics of etofylline after in…, International journal of cl… (1981) | popPK | 10 | not captured | [7263108](https://pubmed.ncbi.nlm.nih.gov/7263108) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for etofylline in humans, and all numeric values are explicitly present in the abstract text. |
| `Erking_1981.pdf` | Erking W et al., [Human pharmacokinetics of theophylline…, Arzneimittel-Forschung (1981) | popPK | 8 | not captured | [7194656](https://pubmed.ncbi.nlm.nih.gov/7194656) | The study reports quantitative PK parameters (half-life, bioavailability) for etofylline in humans, though specific clearance or volume values are not explicitly listed in the text. |
| `Lücker_1980.pdf` | Lücker PW et al., [Metabolism and pharmacokinetics of eto…, Arzneimittel-Forschung (1980) | popPK | 8 | not captured | [7194058](https://pubmed.ncbi.nlm.nih.gov/7194058) | The study reports quantitative pharmacokinetic parameters (half-lives, Cmax) for etofylline, which is the active metabolite of the subject drug etofylline clofibrate (closely related to etofylline nicotinate), in human volunteers. |

<sub>queue written 2026-10-06T20:05:31.208929+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fang_2019 | irrelevant | 0 | 0 | The study focuses on doxofylline as the subject drug, with etofylline appearing only as a metabolite, and no PK parameters for etofylline_nicotinate are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:05 UTC</sub>
