<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01B&quot;,&quot;href&quot;:&quot;atc/J01B.md&quot;},{&quot;label&quot;:&quot;thiamphenicol&quot;}]"></div>

# thiamphenicol

- **generic name:** thiamphenicol
- **ATC codes:** `J01BA02`
- **DrugBank:** [DB08621](https://go.drugbank.com/drugs/DB08621) · **PubChem:** [CID 27200](https://pubchem.ncbi.nlm.nih.gov/compound/27200)
- **molar mass:** 356.222 g/mol (C12H15Cl2NO5S) — DrugBank
- **groups:** investigational

## About

Thiamphenicol is an amphenicol antibiotic used to treat bacterial infections. It is not authorised in the European Union and is considered investigational in major drug databases, though it remains available in some other regions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425015](https://www.wikidata.org/wiki/Q425015) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| thiamphenicol | parent | 356.222 | C12H15Cl2NO5S | DrugBank | [27200](https://pubchem.ncbi.nlm.nih.gov/compound/27200) | Abd_2001, Fang_2013, Yang_2011 |
| thiamphenicol glycinate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:12 | 0:57 | 0/1/2 | 0/0/0 | 0/0/0 | 36,663/4,301 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Abd_2001_reference](drugs/drug_thiamphenicol/Thiamphenicol_Abd2001_reference.md) | — | 1-compartment (no model) | 3 | Abd El-Aty AM et al., Pharmacodisposition of thiamphenicol in…, DTW. Deutsche tierarztliche… (2001) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Yang_2011_reference](drugs/drug_thiamphenicol/Thiamphenicol_Yang2011_reference.md) | — | parent + metabolite (no model) | 4 | Yang B et al., Pharmacokinetics of the prodrug thiamph…, Xenobiotica; the fate of fo… (2011) | [10.3109/00498254.2010.535218](https://doi.org/10.3109/00498254.2010.535218) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Fang_2013_reference](drugs/drug_thiamphenicol/Thiamphenicol_Fang2013_reference.md) | — | general linear (no model) | 7 | Fang W et al., Pharmacokinetics and tissue distributio…, Journal of aquatic animal h… (2013) | [10.1080/08997659.2012.754799](https://doi.org/10.1080/08997659.2012.754799) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abd_2001.pdf` | Abd El-Aty AM et al., Pharmacodisposition of thiamphenicol in…, DTW. Deutsche tierarztliche… (2001) | popPK | 10 | not captured | [11599443](https://pubmed.ncbi.nlm.nih.gov/11599443) | The paper reports quantitative pharmacokinetic parameters (half-lives, volume of distribution, bioavailability, absorption rates) for thiamphenicol in rabbits. |
| `Yang_2011.pdf` | Yang B et al., Pharmacokinetics of the prodrug thiamph…, Xenobiotica; the fate of fo… (2011) | popPK | 10 | [10.3109/00498254.2010.535218](https://doi.org/10.3109/00498254.2010.535218) | [21091321](https://pubmed.ncbi.nlm.nih.gov/21091321) | The study reports detailed quantitative pharmacokinetic parameters (CL, V, MRT, rate constants) for thiamphenicol in beagle dogs within the provided text. |
| `Fang_2013.pdf` | Fang W et al., Pharmacokinetics and tissue distributio…, Journal of aquatic animal h… (2013) | popPK | 9 | [10.1080/08997659.2012.754799](https://doi.org/10.1080/08997659.2012.754799) | [23480025](https://pubmed.ncbi.nlm.nih.gov/23480025) | The study reports quantitative pharmacokinetic parameters (half-lives, AUC, Cmax) for thiamphenicol in shrimp, with numeric values present in the text. |

<sub>queue written 2026-10-07T10:11:58.670606+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2003 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for florfenicol, not thiamphenicol, which is only mentioned as a structural analogue. |
| PGx | Groenewold_2018 | not_relevant | 0 | 0 | The paper studies a protein in Pseudomonas aeruginosa and its effect on bacterial susceptibility, not human pharmacogenomics. |
| popPK | Lai_2009 | irrelevant | 0 | 0 | The study assesses the toxicological growth inhibition effects of thiamphenicol on microalgae, not its pharmacokinetic disposition parameters. |
| popPK | Lei_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for florfenicol, which is a structural analog of thiamphenicol, but not for thiamphenicol itself. |
| PGx | Piechota_2006 | not_relevant | 0 | 0 | The paper uses thiamphenicol as a tool to inhibit mitochondrial DNA expression in HeLa cells to study bioenergetics, rather than investigating a pharmacogenomic effect of a gene variant on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study is a toxicity assessment in Daphnia magna and does not contain pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:12 UTC</sub>
