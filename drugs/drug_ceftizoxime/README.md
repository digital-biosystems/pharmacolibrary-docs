<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftizoxime&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ceftizoxime_Karna1993_reference&quot;,&quot;label&quot;:&quot;Karna_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftizoxime/Ceftizoxime_Karna1993_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ceftizoxime

- **generic name:** ceftizoxime
- **ATC codes:** `J01DD07`
- **DrugBank:** [DB01332](https://go.drugbank.com/drugs/DB01332) · **PubChem:** [CID 6533629](https://pubchem.ncbi.nlm.nih.gov/compound/6533629)
- **molar mass:** 383.403 g/mol (C13H13N5O5S2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Ceftizoxime is a third-generation cephalosporin antibiotic used to treat bacterial infections such as sepsis, gonorrhea, urinary tract infections, pneumonia, and other gram-negative infections. It has been withdrawn from use in some markets, though it remains approved elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1082945](https://www.wikidata.org/wiki/Q1082945) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ceftizoxime | parent | 383.403 | C13H13N5O5S2 | DrugBank | [6533629](https://pubchem.ncbi.nlm.nih.gov/compound/6533629) | Karna_1993, Murakawa_1980 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:43 | 1:50 | 1/1/0 | 0/0/0 | 0/0/0 | 88,890/6,493 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Karna_1993_reference](drugs/drug_ceftizoxime/Ceftizoxime_Karna1993_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Karna P et al., Population pharmacokinetics of ceftizox…, Developmental pharmacology… (1993) | [10.1159/000457554](https://doi.org/10.1159/000457554) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Murakawa_1980_reference](drugs/drug_ceftizoxime/Ceftizoxime_Murakawa1980_reference.md) | — | 1-compartment (no model) | 1 | Murakawa T et al., Pharmacokinetics of ceftizoxime in anim…, Antimicrobial agents and ch… (1980) | [10.1128/AAC.17.2.157](https://doi.org/10.1128/AAC.17.2.157) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ceftizoxime) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: Peptidoglycan transpeptidase (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Karna_1993.pdf` | Karna P et al., Population pharmacokinetics of ceftizox…, Developmental pharmacology… (1993) | popPK | 10 | [10.1159/000457554](https://doi.org/10.1159/000457554) | [7828445](https://pubmed.ncbi.nlm.nih.gov/7828445) | The paper reports explicit numeric population pharmacokinetic parameters (clearance, volume, half-life) for ceftizoxime in the evidence text. |
| `Facca_1998.pdf` | Facca B et al., Population pharmacokinetics of ceftizox…, Antimicrobial agents and ch… (1998) | popPK | 9 | [10.1128/AAC.42.7.1783](https://doi.org/10.1128/AAC.42.7.1783) | [9661021](https://pubmed.ncbi.nlm.nih.gov/9661021) | The paper describes a relevant population PK study for ceftizoxime in humans, but the evidence text only provides specific parameter values for a sub-population (additive clearance 1.6 L/h) and does not list the complete set of model parameters (e.g., base clearance, volume of distribution) which likely reside in the full text or tables not fully reproduced in the snippet. |

<sub>queue written 2026-10-07T10:42:25.221153+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Facca_1998 | relevant | 9 | 3 | The paper describes a relevant population PK study for ceftizoxime in humans, but the evidence text only provides specific parameter values for a sub-population (additive clearance 1.6 L/h) and does not list the complete set of model parameters (e.g., base clearance, volume of distribution) which likely reside in the full text or tables not fully reproduced in the snippet. |
| popPK | Fuscaldi_2021 | irrelevant | 0 | 0 | The study focuses on the antimicrobial activity of antimicrobial peptides, using 99mTc-labeled ceftizoxime only as a diagnostic imaging probe (scintigraphy) rather than as the subject of pharmacokinetic analysis. |
| popPK | Sánchez-Navarro_2001 | irrelevant | 1 | 0 | The paper is a retrospective PK/PD analysis of literature data and does not report primary quantitative disposition parameters (CL, V, ka) for ceftizoxime. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:42 UTC</sub>
