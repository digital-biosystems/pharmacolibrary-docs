<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;temoporfin&quot;}]"></div>

# temoporfin

- **generic name:** temoporfin
- **ATC codes:** `L01XD05`
- **DrugBank:** [DB11630](https://go.drugbank.com/drugs/DB11630) · **PubChem:** not captured
- **molar mass:** 680.764 g/mol (C44H32N4O4) — DrugBank
- **groups:** approved

## About

Temoporfin is a photosensitizing antineoplastic agent used in photodynamic therapy for head and neck cancers, notably squamous cell carcinoma. It is authorised in the European Union, but its use remains limited to specialised treatment of these tumours.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7698204](https://www.wikidata.org/wiki/Q7698204) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| temoporfin | parent | 680.764 | C44H32N4O4 | DrugBank | — | Jones_2003 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:44 | 0:43 | 0/3/0 | 0/0/0 | 0/0/0 | 92,133/4,215 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bovis_2012_reference](drugs/drug_temoporfin/Temoporfin_Bovis2012_reference.md) | — | 1-compartment (no model) | 0 | Bovis MJ et al., Improved in vivo delivery of m-THPC via…, Journal of controlled relea… (2012) | [10.1016/j.jconrel.2011.09.085](https://doi.org/10.1016/j.jconrel.2011.09.085) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Jones_2003_reference](drugs/drug_temoporfin/Temoporfin_Jones2003_reference.md) | — | 1-compartment (no model) | 6 | Jones HJ et al., Photodynamic therapy effect of m-THPC (…, British journal of cancer (2003) | [10.1038/sj.bjc.6601101](https://doi.org/10.1038/sj.bjc.6601101) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2011_reference](drugs/drug_temoporfin/Temoporfin_Wang2011_reference.md) | — | 1-compartment (no model) | 0 | Wang JD et al., [Pharmacokinetics of photosensitizer m-…, Zhonghua wai ke za zhi [Chi… (2011) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2011.pdf` | Wang JD et al., [Pharmacokinetics of photosensitizer m-…, Zhonghua wai ke za zhi [Chi… (2011) | popPK | 10 | not captured | [21612701](https://pubmed.ncbi.nlm.nih.gov/21612701) | The study reports quantitative pharmacokinetic parameters (two-compartment model, half-lives) for m-THPC in rats, although specific values for clearance and volume of distribution are not explicitly listed in the provided text. |
| `Decker_2013.pdf` | Decker C et al., Pharmacokinetics of temoporfin-loaded l…, Journal of controlled relea… (2013) | popPK | 9 | [10.1016/j.jconrel.2013.01.005](https://doi.org/10.1016/j.jconrel.2013.01.005) | [23313962](https://pubmed.ncbi.nlm.nih.gov/23313962) | The study is a pharmacokinetic analysis in rats using compartmental models for temoporfin, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided text. |
| `Bovis_2012.pdf` | Bovis MJ et al., Improved in vivo delivery of m-THPC via…, Journal of controlled relea… (2012) | popPK | 8 | [10.1016/j.jconrel.2011.09.085](https://doi.org/10.1016/j.jconrel.2011.09.085) | [21982898](https://pubmed.ncbi.nlm.nih.gov/21982898) | The study reports quantitative PK parameters (elimination half-lives from a 3-compartment model) for temoporfin (m-THPC) in rats. |

<sub>queue written 2026-10-06T21:43:34.084580+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Decker_2013 | relevant | 9 | 0 | The study is a pharmacokinetic analysis in rats using compartmental models for temoporfin, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided text. |
| popPK | Desroches_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of m-TPP(glu)3 and m-THPC, not temoporfin. |
| popPK | Ghazal_2017 | irrelevant | 0 | 0 | The paper is a study on novel phthalocyanine compounds where temoporfin is used only as a comparator for photodynamic activity, with no pharmacokinetic data reported. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The study investigates Zika virus protease inhibitors in vitro and in a mouse model, using temoporfin only as a positive control for enzyme inhibition, and contains no pharmacokinetic data for temoporfin. |
| popPK | Machacek_2016 | irrelevant | 0 | 0 | The paper is an in-vitro structure-activity relationship study on novel photosensitizers, with temoporfin used only as a comparator for potency, and no pharmacokinetic data are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:43 UTC</sub>
