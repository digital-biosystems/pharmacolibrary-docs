<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08E&quot;,&quot;href&quot;:&quot;atc/C08E.md&quot;},{&quot;label&quot;:&quot;bepridil&quot;}]"></div>

# bepridil

- **generic name:** bepridil
- **ATC codes:** `C08EA02`
- **DrugBank:** [DB01244](https://go.drugbank.com/drugs/DB01244) · **PubChem:** [CID 2351](https://pubchem.ncbi.nlm.nih.gov/compound/2351)
- **molar mass:** 366.5396 g/mol (C24H34N2O) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

**Description.** A long-acting, non selective, calcium channel blocker with significant anti-anginal activity. The drug produces significant coronary vasodilation and modest peripheral effects. It has antihypertensive and selective anti-arrhythmia activities and acts as a calmodulin antagonist. It is no longer marketed in the United States, as it has been implicated in causing ventricular arrhythmias (ie. Torsade de pointes).

**Indication.** For the treatment of hypertension, and chronic stable angina (classic effort-associated angina).

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bepridil | parent | 366.54 | C24H34N2O | DrugBank | [2351](https://pubchem.ncbi.nlm.nih.gov/compound/2351) | Taguchi_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 18:37 | 1:30 | 0/1/0 | 0/0/0 | 0/0/0 | 10,892/6,830 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Taguchi_2006_reference](drugs/drug_bepridil/Bepridil_Taguchi2006_reference.md) | — | 1-compartment (no model) | 1 | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2006) | [10.1248/bpb.29.517](https://doi.org/10.1248/bpb.29.517) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bepridil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), CACNA1A (inhibitor), CACNA1H (inhibitor), CACNA2D2 (inhibitor), CALM1 (binder), KCNH2 (inhibitor), KCNQ1 (inhibitor), PDE1A (inhibitor), PDE1B (inhibitor), TNNC1 (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lesko_1986.pdf` | Lesko LJ et al., Pharmacokinetics of intravenous bepridi…, Journal of pharmaceutical s… (1986) | popPK | 10 | [10.1002/jps.2600751008](https://doi.org/10.1002/jps.2600751008) | [3491897](https://pubmed.ncbi.nlm.nih.gov/3491897) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for bepridil with specific numeric values present in the text. |
| `Shiga_2013.pdf` | Shiga T et al., Contributing factors to the apparent cl…, Therapeutic drug monitoring (2013) | popPK | 10 | [10.1097/FTD.0b013e318286ec33](https://doi.org/10.1097/FTD.0b013e318286ec33) | [23666576](https://pubmed.ncbi.nlm.nih.gov/23666576) | The paper is a population PK study of bepridil, but the specific numeric parameter values (e.g., mean CL/F, V/F) are not present in the provided abstract text. |

<sub>queue written 2026-09-29T18:36:27.224768+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nielsen-Kudsk_1988 | relevant | 4 | 5 | The study reports quantitative kinetic parameters (half-lives, compartmental distribution) for bepridil in an isolated rabbit heart model, but it is an in-vitro/ex-vivo mechanistic study rather than a standard systemic population-PK study. |
| popPK | Shiga_2013 | relevant | 10 | 0 | The paper is a population PK study of bepridil, but the specific numeric parameter values (e.g., mean CL/F, V/F) are not present in the provided abstract text. |
| popPK | Vatansever_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on anti-SARS-CoV-2 activity and does not report pharmacokinetic parameters for bepridil. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 11:10 UTC</sub>
