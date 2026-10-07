<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;pazufloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pazufloxacin_Umezaki2022_reference&quot;,&quot;label&quot;:&quot;Umezaki_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazufloxacin/Pazufloxacin_Umezaki2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pazufloxacin

- **generic name:** pazufloxacin
- **ATC codes:** `J01MA18`
- **DrugBank:** [DB11774](https://go.drugbank.com/drugs/DB11774) · **PubChem:** [CID 65957](https://pubchem.ncbi.nlm.nih.gov/compound/65957)
- **molar mass:** 318.304 g/mol (C16H15FN2O4) — DrugBank
- **groups:** investigational

## About

Pazufloxacin is a fluoroquinolone antibacterial that has been investigated as an antituberculous drug. It is not an approved medicine in major markets such as the European Union and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3898423](https://www.wikidata.org/wiki/Q3898423) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pazufloxacin | parent | 318.304 | C16H15FN2O4 | DrugBank | [65957](https://pubchem.ncbi.nlm.nih.gov/compound/65957) | Umezaki_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:45 | 0:55 | 1/0/0 | 0/0/0 | 0/0/0 | 41,001/5,391 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Umezaki_2022_reference](drugs/drug_pazufloxacin/Pazufloxacin_Umezaki2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Umezaki Y et al., Concentration-Dependent Activity of Paz…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11070982](https://doi.org/10.3390/antibiotics11070982) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pazufloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lou_2007.pdf` | Lou S et al., Influence of cefoperazone and azithromy…, European journal of drug me… (2007) | popPK | 10 | [10.1007/BF03191007](https://doi.org/10.1007/BF03191007) | [18348471](https://pubmed.ncbi.nlm.nih.gov/18348471) | The study reports PK parameters (Cl, Vd, t1/2 beta, AUC) for pazufloxacin in rats using a two-compartmental model, but no specific numeric values are provided in the evidence text. |
| `Nakamura_2017.pdf` | Nakamura K et al., Clinical pharmacokinetics and pharmacod…, Journal of infection and ch… (2017) | popPK | 9 | [10.1016/j.jiac.2017.08.005](https://doi.org/10.1016/j.jiac.2017.08.005) | [28923301](https://pubmed.ncbi.nlm.nih.gov/28923301) | The study is a clinical PK/PD investigation of pazufloxacin in humans, but the evidence only provides summary ratios and qualitative target attainment probabilities, lacking the specific numeric values for clearance (CL), volume (V), and half-life required for parameter extraction. |

<sub>queue written 2026-10-07T11:44:52.423854+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lou_2007 | relevant | 10 | 0 | The study reports PK parameters (Cl, Vd, t1/2 beta, AUC) for pazufloxacin in rats using a two-compartmental model, but no specific numeric values are provided in the evidence text. |
| popPK | Nakamura_2017 | relevant | 9 | 3 | The study is a clinical PK/PD investigation of pazufloxacin in humans, but the evidence only provides summary ratios and qualitative target attainment probabilities, lacking the specific numeric values for clearance (CL), volume (V), and half-life required for parameter extraction. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:44 UTC</sub>
