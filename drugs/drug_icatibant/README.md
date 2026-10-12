<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;icatibant&quot;}]"></div>

# icatibant

- **generic name:** icatibant
- **ATC codes:** `B06AC02`
- **DrugBank:** [DB06196](https://go.drugbank.com/drugs/DB06196) · **PubChem:** [CID 71364](https://pubchem.ncbi.nlm.nih.gov/compound/71364)
- **groups:** approved, investigational

## About

Icatibant is a bradykinin B2 receptor antagonist used to treat hereditary angioedema attacks. It is authorised in the European Union and used for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q902379](https://www.wikidata.org/wiki/Q902379) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| icatibant | parent | 1304.54 | C59H89N19O13S | PubChem | [71364](https://pubchem.ncbi.nlm.nih.gov/compound/71364) | Wang_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:15 | 5:00 | 0/2/0 | 0/0/0 | 0/0/0 | 92,495/12,130 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Wang_2021_typical_value](drugs/drug_icatibant/Icatibant_Wang2021_typical_value.md) | — | 1-compartment (no model) | 3 | Wang Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2021_typical_value_rse](drugs/drug_icatibant/Icatibant_Wang2021_typical_value_rse.md) | — | 1-compartment (no model) | 2 | Wang Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=icatibant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ANPEP (inhibitor), BDKRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bellucci_2004.pdf` | Bellucci F et al., The N-terminal of icatibant and bradyki…, European journal of pharmac… (2004) | pd | 4 | [10.1016/j.ejphar.2004.03.031](https://doi.org/10.1016/j.ejphar.2004.03.031) | [15140628](https://www.ncbi.nlm.nih.gov/pubmed/15140628) | metadata signals extractable PD data (EC50) |
| `Meini_2007.pdf` | Meini S et al., Comparative antagonist pharmacology at…, British journal of pharmaco… (2007) | pd | 4 | [10.1038/sj.bjp.0706995](https://doi.org/10.1038/sj.bjp.0706995) | [17179941](https://www.ncbi.nlm.nih.gov/pubmed/17179941) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T01:11:33.261038+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellucci_2004 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Bellucci_2004 | not_relevant | 0 | 0 | The paper focuses on structural interactions between icatibant, bradykinin, and the B2 receptor, reporting no pharmacodynamic or exposure-response data. |
| popPK | Bellucci_2007 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay characterizing kinin receptors, using icatibant only as a pharmacological antagonist tool rather than measuring its pharmacokinetic disposition parameters. |
| PD | Bellucci_2007 | not_relevant | 0 | 0 | The paper characterizes kinin receptors in cultured cells using radioligand binding and functional assays (PI accumulation, PGE2 release) for agonists (BK, [desArg9]-Lys-BK); icatibant is only used as a reference antagonist in binding inhibition studies, and no exposure-response or dose-response PD model for icatibant is reported. |
| popPK | Bellucci_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of bradykinin B2 receptor antagonism in human synovial fibroblasts and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for icatibant. |
| popPK | Bentley_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of bradykinin receptor function in bovine cells where icatibant is used only as a competitive antagonist, not as the subject of pharmacokinetic analysis. |
| popPK | Brosnihan_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Angiotensin-(1-7) vasodilation where icatibant is used only as a receptor antagonist to block bradykinin effects, with no pharmacokinetic parameters reported. |
| PD | Brosnihan_1998 | not_relevant | 1 | 0 | The paper focuses on the pharmacology of Angiotensin-(1-7); icatibant is only mentioned qualitatively as an antagonist that attenuates the response, with no numeric PD parameters or exposure-response data provided for icatibant. |
| popPK | Chrétien_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of bradykinin receptor signaling in bovine cells where icatibant is used only as a pharmacological antagonist, not as the subject of pharmacokinetic analysis. |
| popPK | Meini_2007 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Meini_2007 | not_relevant | 0 | 0 | The paper focuses on comparative antagonist pharmacology at the mouse bradykinin B2 receptor and does not mention icatibant or report any exposure-response or dose-response data for it. |
| PGx | Montinaro_2020 | not_relevant | 2 | 0 | The text mentions a potential ethnic predisposition to icatibant efficacy but does not report specific pharmacogenomic data (gene variants) or quantitative PK/PD parameters. |
| popPK | Ochodnický_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of bradykinin signaling in urothelial cells where icatibant is used only as a receptor antagonist, with no pharmacokinetic parameters reported. |
| popPK | Wiernas_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of bradykinin receptor binding and signaling in corneal cells, not a pharmacokinetic study of icatibant. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 01:11 UTC</sub>
