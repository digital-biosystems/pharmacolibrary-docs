<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;levamlodipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levamlodipine_Li2025_base&quot;,&quot;label&quot;:&quot;Li_2025_base&quot;,&quot;href&quot;:&quot;drugs/drug_levamlodipine/Levamlodipine_Li2025_base.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levamlodipine_Li2025_final&quot;,&quot;label&quot;:&quot;Li_2025_final&quot;,&quot;href&quot;:&quot;drugs/drug_levamlodipine/Levamlodipine_Li2025_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# levamlodipine

- **generic name:** levamlodipine
- **ATC codes:** `C08CA17`
- **DrugBank:** [DB09237](https://go.drugbank.com/drugs/DB09237) · **PubChem:** [CID 9822750](https://pubchem.ncbi.nlm.nih.gov/compound/9822750)
- **molar mass:** 408.88 g/mol (C20H25ClN2O5) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Levamlodipine, also known as S-amlodipine, is a pharmacologically active enantiomer of [amlodipine], an antihypertensive medication.[L10833] Levamlodipine belongs to the dihydropyridine group of calcium channel blockers.[L10833] This medication was first marketed in Russia and India before being granted FDA approval.[L1484] The names S-amlodipine and levamlodipine may be used interchangeably as both substances are the same, however.[L10833] As a racemic mixture, amlodipine contains (R) and (S)-amlodipine isomers, but only (S)-amlodipine as the active moiety possesses therapeutic activity.[A188940]

Levamlodipine was granted FDA approval on 19 December 2019.[L10833]

**Indication.** Levamlodipine is indicated alone or in combination to treat hypertension in adults and children.[L10833]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levamlodipine | parent | 408.88 | C20H25ClN2O5 | DrugBank | [9822750](https://pubchem.ncbi.nlm.nih.gov/compound/9822750) | Li_2025 |
| levamlodipine besylate | metabolite | 567.05 | C26H31ClN2O8S | PubChem | [11365087](https://pubchem.ncbi.nlm.nih.gov/compound/11365087) | Li_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 08:57 | 5:04 | 2/0/0 | 0/0/0 | 0/0/0 | 66,542/11,911 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Li_2025_base](drugs/drug_levamlodipine/Levamlodipine_Li2025_base.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li G et al., Model-Informed Precision Dosing of Leva…, Drug design, development an… (2025) | [10.2147/DDDT.S501762](https://doi.org/10.2147/DDDT.S501762) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Li_2025_final](drugs/drug_levamlodipine/Levamlodipine_Li2025_final.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li G et al., Model-Informed Precision Dosing of Leva…, Drug design, development an… (2025) | [10.2147/DDDT.S501762](https://doi.org/10.2147/DDDT.S501762) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levamlodipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | ileum | `SLC10A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate, `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `SLC22A5` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Levamlodipine is 60% eliminated in urine with 10% eliminated as the unmetabolized drug.[L1…”</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (target), CACNA1D (target), NOS2 (inducer), NOS2 (target), NOS3 (inducer), NOS3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2009.pdf` | Kim KA et al., Effect of cytochrome P450 3A5*3 genotyp…, Chirality (2009) | pgx | 8 | [10.1002/chir.20588](https://doi.org/10.1002/chir.20588) | [18752284](https://www.ncbi.nlm.nih.gov/pubmed/18752284) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-09-29T08:53:38.589984+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Kim_2009 | not_relevant | 0 | 0 | The paper studies amlodipine, not levamlodipine. |
| popPK | Xu_2019 | irrelevant | 0 | 0 | The study is an in-vitro spectroscopic and molecular docking analysis of binding to hemoglobin, not a pharmacokinetic study reporting disposition parameters. |
| PD | Xu_2019 | not_relevant | 0 | 0 | The paper investigates the in vitro binding interaction between levamlodipine and hemoglobin using spectroscopy and docking, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 08:53 UTC</sub>
