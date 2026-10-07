<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;mecillinam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mecillinam_Koumaki2023_reference&quot;,&quot;label&quot;:&quot;Koumaki_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mecillinam/Mecillinam_Koumaki2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mecillinam

- **generic name:** mecillinam
- **ATC codes:** `J01CA11`
- **DrugBank:** [DB01163](https://go.drugbank.com/drugs/DB01163) · **PubChem:** [CID 36273](https://pubchem.ncbi.nlm.nih.gov/compound/36273)
- **molar mass:** 325.426 g/mol (C15H23N3O3S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Mecillinam (amdinocillin) is an extended-spectrum penicillin antibiotic used to treat bacterial infections, especially urinary tract infections. It has been withdrawn from the market in some countries but remains approved and used elsewhere, mainly for urinary infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q13019044](https://www.wikidata.org/wiki/Q13019044) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mecillinam | parent | 325.426 | C15H23N3O3S | DrugBank | [36273](https://pubchem.ncbi.nlm.nih.gov/compound/36273) | Koumaki_2023, Soback_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:04 | 0:17 | 1/0/1 | 0/0/0 | 0/0/0 | 35,009/2,832 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Koumaki_2023_reference](drugs/drug_mecillinam/Mecillinam_Koumaki2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Koumaki V et al., Pharmacokinetic/Pharmacodynamic Determi…, Microbiology spectrum (2023) | [10.1128/spectrum.03441-22](https://doi.org/10.1128/spectrum.03441-22) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Soback_1986_reference](drugs/drug_mecillinam/Mecillinam_Soback1986_reference.md) | — | 1-compartment (no model) | 5 | Soback S et al., Clinical pharmacology of mecillinam in…, Journal of veterinary pharm… (1986) | [10.1111/j.1365-2885.1986.tb00059.x](https://doi.org/10.1111/j.1365-2885.1986.tb00059.x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moukhtar_1987.pdf` | Moukhtar I et al., Pharmacokinetics of mecillinam after a…, International journal of cl… (1987) | popPK | 10 | not captured | [3583488](https://pubmed.ncbi.nlm.nih.gov/3583488) | The study is a pharmacokinetic analysis of mecillinam in humans reporting quantitative parameters including clearance, half-life, and AUC. |
| `Soback_1986.pdf` | Soback S et al., Clinical pharmacology of mecillinam in…, Journal of veterinary pharm… (1986) | popPK | 10 | [10.1111/j.1365-2885.1986.tb00059.x](https://doi.org/10.1111/j.1365-2885.1986.tb00059.x) | [3543397](https://pubmed.ncbi.nlm.nih.gov/3543397) | The abstract explicitly reports quantitative pharmacokinetic parameters including half-lives (11.7 min, 53.3 min, 65 min) and volumes of distribution (0.568 l/kg, 0.896 l/kg) for mecillinam. |

<sub>queue written 2026-10-07T10:04:26.553764+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Halling-Sørensen_2000 | irrelevant | 0 | 0 | The paper is an environmental risk assessment focusing on ecotoxicity and biodegradation, not pharmacokinetics. |
| popPK | Halling-Sørensen_2000_2 | irrelevant | 0 | 0 | This is an environmental risk assessment study focusing on aquatic toxicity and biodegradability, not pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Li_1994 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic modeling of bacterial kinetics for other antibiotics (amoxicillin, penicillin G, cephalexin) and does not report pharmacokinetic parameters for mecillinam. |
| popPK | Neu_1983 | irrelevant | 0 | 0 | The study analyzes amdinocillin and pivamdinocillin, not mecillinam. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:04 UTC</sub>
