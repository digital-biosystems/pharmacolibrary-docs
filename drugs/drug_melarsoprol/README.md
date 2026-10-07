<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;melarsoprol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Melarsoprol_Burri1994_reference&quot;,&quot;label&quot;:&quot;Burri_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_melarsoprol/Melarsoprol_Burri1994_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# melarsoprol

- **generic name:** melarsoprol
- **ATC codes:** `P01CD01`
- **DrugBank:** [DB12864](https://go.drugbank.com/drugs/DB12864) · **PubChem:** [CID 10311](https://pubchem.ncbi.nlm.nih.gov/compound/10311)
- **molar mass:** 398.33 g/mol (C12H15AsN6OS2) — DrugBank
- **groups:** investigational

## About

Melarsoprol is an arsenic-based antiparasitic drug used to treat sleeping sickness (African trypanosomiasis). It has been listed among WHO essential medicines as a trypanocidal agent, but DrugBank currently classifies it as investigational, so its availability today appears limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419753](https://www.wikidata.org/wiki/Q419753) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| melarsoprol | parent | 398.33 | C12H15AsN6OS2 | DrugBank | [10311](https://pubchem.ncbi.nlm.nih.gov/compound/10311) | Burri_1994 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:50 | 0:33 | 1/0/0 | 0/0/0 | 0/0/0 | 11,438/712 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Burri_1994_reference](drugs/drug_melarsoprol/Melarsoprol_Burri1994_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Burri C et al., Pharmacokinetics of melarsoprol in unin…, Acta tropica (1994) | [10.1016/0001-706x(94)90120-1](https://doi.org/10.1016/0001-706x(94)90120-1) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Burri_1994.pdf` | Burri C et al., Pharmacokinetics of melarsoprol in unin…, Acta tropica (1994) | popPK | 10 | [10.1016/0001-706x(94)90120-1](https://doi.org/10.1016/0001-706x(94)90120-1) | [7863853](https://pubmed.ncbi.nlm.nih.gov/7863853) | Abstract directly reports numeric PK parameters (V 3.6 l/kg, CL 3.5 ml/min·kg, MRT 18 h) from a three-compartment model in vervet monkeys. |

<sub>queue written 2026-10-07T07:50:15.673982+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bapiro_2002 | not_relevant | 0 | 0 | Melarsoprol is only listed as showing no effect on CYP1A; no gene variant/genotype effect on its PK/PD is reported. |
| popPK | Bouteille_1995 | irrelevant | 0 | 0 | Study concerns megazol efficacy in mice; melarsoprol is only mentioned as background, with no PK parameters for any drug. |
| popPK | Ullman_1989 | irrelevant | 0 | 0 | In-vitro Leishmania resistance study; melarsoprol only a comparator agent, no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:50 UTC</sub>
