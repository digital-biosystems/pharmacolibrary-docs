<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;apraglutide&quot;}]"></div>

# apraglutide

- **generic name:** apraglutide
- **ATC codes:** `A16AX27`
- **DrugBank:** [DB18084](https://go.drugbank.com/drugs/DB18084) · **PubChem:** not captured
- **groups:** investigational

## About

Apraglutide is an investigational drug in the alimentary tract and metabolism category, being studied for gastrointestinal conditions. It is not yet approved; it remains under clinical investigation and is not in general use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:56 | 0:37 | 0/1/0 | 0/0/0 | 0/0/0 | 18,011/834 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bolognani_2023_reference](drugs/drug_apraglutide/Apraglutide_Bolognani2023_reference.md) | — | 1-compartment (no model) | 0 | Bolognani F et al., Characterization of the Pharmacokinetic…, The Journal of pharmacology… (2023) | [10.1124/jpet.123.001582](https://doi.org/10.1124/jpet.123.001582) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bolognani_2023.pdf` | Bolognani F et al., Characterization of the Pharmacokinetic…, The Journal of pharmacology… (2023) | popPK | 10 | [10.1124/jpet.123.001582](https://doi.org/10.1124/jpet.123.001582) | [37316329](https://pubmed.ncbi.nlm.nih.gov/37316329) | The study reports quantitative PK parameters (clearance and volume of distribution) for apraglutide in healthy humans, with specific numeric ranges provided in the abstract. |
| `Hargrove_2020.pdf` | Hargrove DM et al., Pharmacological Characterization of Apr…, The Journal of pharmacology… (2020) | popPK | 9 | [10.1124/jpet.119.262238](https://doi.org/10.1124/jpet.119.262238) | [32075870](https://pubmed.ncbi.nlm.nih.gov/32075870) | The abstract provides specific quantitative PK parameters (clearance and half-life) for apraglutide in rats, monkeys, and minipigs. |
| `Greig_2026.pdf` | Greig G et al., Pharmacokinetics and Safety of Single-D…, Clinical pharmacology in dr… (2026) | popPK | 8 | [10.1002/cpdd.70006](https://doi.org/10.1002/cpdd.70006) | [41545784](https://pubmed.ncbi.nlm.nih.gov/41545784) | The study reports quantitative PK parameters (Cmax, AUC) for apraglutide in humans, but lacks compartmental model parameters (CL, V, t1/2) and full concentration-time data. |

<sub>queue written 2026-10-05T10:56:11.478916+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Greig_2024 | irrelevant | 4 | 2 | The study reports summary PK metrics (Cmax, AUC) but lacks compartmental parameters (CL, V, t1/2) required for population PK modeling. |
| PD | Hargrove_2020 | not_relevant | 3 | 1 | The text describes PK parameters and qualitatively states that apraglutide has greater in vivo pharmacodynamic activity (intestinal growth) than other peptides, but it does not provide numeric PD parameters (e.g., Emax, EC50) or an explicit concentration-effect curve in the provided text. |
| popPK | Nordell_2026 | relevant | 8 | 2 | The paper is a PK study including apraglutide, but specific numeric parameter values for apraglutide are located in Table S1 (supplementary material) which is not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 10:56 UTC</sub>
