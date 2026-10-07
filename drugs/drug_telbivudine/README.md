<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;telbivudine&quot;}]"></div>

# telbivudine

- **generic name:** telbivudine
- **ATC codes:** `J05AF11`
- **DrugBank:** [DB01265](https://go.drugbank.com/drugs/DB01265) · **PubChem:** [CID 159269](https://pubchem.ncbi.nlm.nih.gov/compound/159269)
- **molar mass:** 242.2286 g/mol (C10H14N2O5) — DrugBank
- **groups:** approved, withdrawn

## About

Telbivudine is a nucleoside analogue antiviral that was used to treat chronic hepatitis B. It is no longer available in the European Union, where its marketing authorisation has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413621](https://www.wikidata.org/wiki/Q413621) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| telbivudine | parent | 242.229 | C10H14N2O5 | DrugBank | [159269](https://pubchem.ncbi.nlm.nih.gov/compound/159269) | Zhou_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:26 | 1:53 | 0/0/1 | 1/0/0 | 0/0/0 | 92,758/7,144 | ollama / glm-5.3-flash | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2006_reference](drugs/drug_telbivudine/Telbivudine_Zhou2006_reference.md) | — | 1-compartment (no model) | 3 | Zhou XJ et al., Pharmacokinetics of telbivudine followi…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.50.3.874-879.2006](https://doi.org/10.1128/AAC.50.3.874-879.2006) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Soto_2018_BATA](drugs/drug_telbivudine/pd_Soto_2018_BATA.md) | taste aversiveness (licking suppression, brief-access taste aversion) ← telbivudine · direct Emax (saturable) effect | — | Soto J et al., Rats can predict aversiveness of Active…, European journal of pharmac… (2018) | [10.1016/j.ejpb.2018.09.027](https://doi.org/10.1016/j.ejpb.2018.09.027) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=telbivudine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2009.pdf` | Zhou XJ et al., Population pharmacokinetics of telbivud…, Journal of clinical pharmac… (2009) | popPK | 10 | [10.1177/0091270009333555](https://doi.org/10.1177/0091270009333555) | [19395586](https://pubmed.ncbi.nlm.nih.gov/19395586) | Population PK model of telbivudine in humans, but no numeric parameter values (CL, V, etc.) are present in the evidence text. |

<sub>queue written 2026-10-07T16:25:17.024376+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jiang_2016 | irrelevant | 0 | 0 | This is a renal-function (eGFR) outcome study in CHB patients, not a PK study; no CL, V, ka, half-life, or population-PK parameters for telbivudine are reported. |
| popPK | Lee_2014 | irrelevant | 0 | 0 | This is an efficacy/renal-function (eGFR) outcome study with no PK parameters (CL, V, ka, half-life, or PK model) for telbivudine. |
| popPK | Ren_2017 | irrelevant | 0 | 0 | Telbivudine is only mentioned as a comparator; the PK data concern GLS4, and no numeric PK parameters appear. |
| popPK | Soto_2018 | irrelevant | 0 | 0 | This is a taste-aversion study; telbivudine is only one of nine tested compounds and no PK parameters are reported. |
| popPK | Zhou_2009 | relevant | 10 | 3 | Population PK model of telbivudine in humans, but no numeric parameter values (CL, V, etc.) are present in the evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:25 UTC</sub>
