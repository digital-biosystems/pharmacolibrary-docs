<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;pirarubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pirarubicin_Robert1988_reference&quot;,&quot;label&quot;:&quot;Robert_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pirarubicin/Pirarubicin_Robert1988_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pirarubicin

- **generic name:** pirarubicin
- **ATC codes:** `L01DB08`
- **DrugBank:** [DB11616](https://go.drugbank.com/drugs/DB11616) · **PubChem:** [CID 11296583](https://pubchem.ncbi.nlm.nih.gov/compound/11296583)
- **molar mass:** 627.643 g/mol (C32H37NO12) — DrugBank
- **groups:** investigational

## About

Pirarubicin is an anthracycline cytotoxic antibiotic investigated as an anticancer drug. It is not an approved medicine and remains investigational, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76416926](https://www.wikidata.org/wiki/Q76416926) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pirarubicin (THP-ADM (pirarubicin)) | parent | 627.643 | C32H37NO12 | DrugBank | [11296583](https://pubchem.ncbi.nlm.nih.gov/compound/11296583) | Mader_1995, Robert_1988 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:45 | 3:41 | 1/1/0 | 0/0/1 | 0/0/0 | 33,631/10,393 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Robert_1988_reference](drugs/drug_pirarubicin/Pirarubicin_Robert1988_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Robert J et al., Pharmacokinetics and metabolism of pira…, European journal of cancer… (1988) | [10.1016/0277-5379(88)90217-9](https://doi.org/10.1016/0277-5379(88)90217-9) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Mader_1995_reference](drugs/drug_pirarubicin/Pirarubicin_Mader1995_reference.md) | — | 1-compartment (no model) | 4 | Mader RM et al., Pharmacokinetics of 4'-O-tetrahydropyra…, Cancer chemotherapy and pha… (1995) | [10.1007/BF00685634](https://doi.org/10.1007/BF00685634) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Leca_1998_WBCnadir](drugs/drug_pirarubicin/pd_Leca_1998_WBCnadir.md) | white blood cell nadir count ← pirarubicin · direct log-linear effect | model (no simulator) | Leca FR et al., Pharmacokinetic-pharmacodynamic relatio…, Anti-cancer drugs (1998) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mader_1995.pdf` | Mader RM et al., Pharmacokinetics of 4'-O-tetrahydropyra…, Cancer chemotherapy and pha… (1995) | popPK | 10 | [10.1007/BF00685634](https://doi.org/10.1007/BF00685634) | [7497603](https://pubmed.ncbi.nlm.nih.gov/7497603) | Human study reports a three-compartment model, half-lives, and clearance for pirarubicin with numeric values. |
| `Robert_1988.pdf` | Robert J et al., Pharmacokinetics and metabolism of pira…, European journal of cancer… (1988) | popPK | 10 | [10.1016/0277-5379(88)90217-9](https://doi.org/10.1016/0277-5379(88)90217-9) | [3181250](https://pubmed.ncbi.nlm.nih.gov/3181250) | Human two-compartment PK values, including clearance, volume, and half-lives, are reported in the evidence. |

<sub>queue written 2026-10-06T19:43:22.777841+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Kubota_2001 | not_relevant | 0 | 0 | The text discusses P-glycoprotein-mediated drug resistance but reports no gene variant/genotype effect on a pirarubicin PK or PD parameter. |
| popPK | Leca_1998 | irrelevant | 2 | 1 | Human exposure–toxicity analysis reports an AUC estimate but no quantitative disposition parameters. |
| PGx | Lin_2020 | not_relevant | 0 | 0 | The study reports drug resistance and GSPE effects in cell lines, not an effect of a gene variant, genotype, or phenotype on a pirarubicin PK/PD parameter. |
| popPK | Marbeuf-Gueye_1998 | irrelevant | 1 | 0 | This is an in-vitro cell-efflux study, and pirarubicin’s Ka is described only qualitatively without numeric values. |
| popPK | Meesungnoen_2002 | irrelevant | 0 | 0 | This is an in-vitro cellular efflux study, not a pharmacokinetic disposition study reporting pirarubicin PK parameters. |
| PGx | Wu_2016 | not_relevant | 0 | 0 | WT1 genotype is associated with pathologic response to a combination regimen, but the paper reports no pirarubicin-specific PK or PD parameter. |
| PGx | Zhou_2018 | not_relevant | 0 | 0 | Genotypes were associated with tumor recurrence risk, but the paper reports no pharmacokinetic or pharmacodynamic parameter of pirarubicin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 19:43 UTC</sub>
