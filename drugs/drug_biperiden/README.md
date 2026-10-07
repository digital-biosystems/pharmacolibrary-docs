<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04A&quot;,&quot;href&quot;:&quot;atc/N04A.md&quot;},{&quot;label&quot;:&quot;biperiden&quot;}]"></div>

# biperiden

- **generic name:** biperiden
- **ATC codes:** `N04AA02`
- **DrugBank:** [DB00810](https://go.drugbank.com/drugs/DB00810) · **PubChem:** [CID 2381](https://pubchem.ncbi.nlm.nih.gov/compound/2381)
- **molar mass:** 311.4611 g/mol (C21H29NO) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Biperiden is an anticholinergic drug used to treat Parkinson's disease and lingual-facial-buccal dyskinesia. It remains in clinical use, is listed among WHO essential medicines, and is approved though also marked investigational and withdrawn in some contexts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414914](https://www.wikidata.org/wiki/Q414914) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| biperiden | parent | 311.461 | C21H29NO | DrugBank | [2381](https://pubchem.ncbi.nlm.nih.gov/compound/2381) | Bakker_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:13 | 0:46 | 0/0/1 | 1/0/0 | 0/0/0 | 25,980/1,863 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Bakker_2021_reference](drugs/drug_biperiden/Biperiden_Bakker2021_reference.md) | — | 1-compartment (no model) | 2 | Bakker C et al., Biperiden Challenge Model in Healthy El…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1913](https://doi.org/10.1002/jcph.1913) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Jackisch_1994_3H_ACh_release](drugs/drug_biperiden/pd_Jackisch_1994_3H_ACh_release.md) | [3H]acetylcholine release ← biperiden · inhibition effect | — | Jackisch R et al., The antiparkinsonian drugs budipine and…, European journal of pharmac… (1994) | [10.1016/0014-2999(94)00528-1](https://doi.org/10.1016/0014-2999(94)00528-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=biperiden) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Capacio_2003.pdf` | Capacio BR et al., Pharmacokinetics of intramuscularly adm…, Drug and chemical toxicology (2003) | popPK | 9 | [10.1081/dct-120017553](https://doi.org/10.1081/dct-120017553) | [12643036](https://pubmed.ncbi.nlm.nih.gov/12643036) | The study reports pharmacokinetics for biperiden in guinea pigs with a one-compartment model, but specific numeric values for clearance, volume of distribution, and half-life are not provided in the text, only Cmax and Tmax. |

<sub>queue written 2026-10-07T07:13:13.899594+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Capacio_2003 | relevant | 9 | 2 | The study reports pharmacokinetics for biperiden in guinea pigs with a one-compartment model, but specific numeric values for clearance, volume of distribution, and half-life are not provided in the text, only Cmax and Tmax. |
| popPK | Jackisch_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor antagonism in rabbit brain slices, reporting Ki/IC50 values rather than pharmacokinetic parameters (CL, V, etc.). |
| popPK | Yokogawa_1986 | irrelevant | 0 | 0 | The provided evidence consists only of metadata and software logs, containing no scientific content or pharmacokinetic data for biperiden. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of haloperidol; biperiden is only mentioned as a co-administered antiparkinsonian drug which did not significantly affect the model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:13 UTC</sub>
