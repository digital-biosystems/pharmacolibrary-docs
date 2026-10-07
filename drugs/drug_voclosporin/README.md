<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;voclosporin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Voclosporin_AbdelKahaar2023_reference&quot;,&quot;label&quot;:&quot;Abdel-Kahaar_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_voclosporin/Voclosporin_AbdelKahaar2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# voclosporin

- **generic name:** voclosporin
- **ATC codes:** `L04AD03`
- **DrugBank:** [DB11693](https://go.drugbank.com/drugs/DB11693) · **PubChem:** [CID 6918486](https://pubchem.ncbi.nlm.nih.gov/compound/6918486)
- **molar mass:** 1214.646 g/mol (C63H111N11O12) — DrugBank
- **groups:** approved, investigational

## About

Voclosporin is an immunosuppressive calcineurin inhibitor used to treat lupus nephritis and has also been studied for uveitis. It is approved and authorised in the European Union for lupus nephritis, though it remains investigational for some other uses and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7939256](https://www.wikidata.org/wiki/Q7939256) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| voclosporin | parent | 1214.65 | C63H111N11O12 | DrugBank | [6918486](https://pubchem.ncbi.nlm.nih.gov/compound/6918486) | Mayo_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:07 | 0:56 | 1/1/0 | 2/0/0 | 0/0/0 | 119,346/8,900 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdel-Kahaar_2023_reference](drugs/drug_voclosporin/Voclosporin_AbdelKahaar2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Abdel-Kahaar E et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01246-2](https://doi.org/10.1007/s40262-023-01246-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Mayo_2014_reference](drugs/drug_voclosporin/Voclosporin_Mayo2014_reference.md) | — | 1-compartment (no model) | 2 | Mayo PR et al., Population PKPD of voclosporin in renal…, Journal of clinical pharmac… (2014) | [10.1002/jcph.237](https://doi.org/10.1002/jcph.237) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdel-Kahaar_2023_CN](drugs/drug_voclosporin/pd_Abdel_Kahaar_2023_CN.md) | Calcineurin activity ← Voclosporin · direct sigmoid Emax (Hill) effect | — | Abdel-Kahaar E et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01246-2](https://doi.org/10.1007/s40262-023-01246-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdel-Kahaar_2023_NODAT](drugs/drug_voclosporin/pd_Abdel_Kahaar_2023_NODAT.md) | New-onset diabetes ← Voclosporin · direct sigmoid Emax (Hill) effect | — | Abdel-Kahaar E et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01246-2](https://doi.org/10.1007/s40262-023-01246-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdel-Kahaar_2023_Nephro](drugs/drug_voclosporin/pd_Abdel_Kahaar_2023_Nephro.md) | Nephrotoxicity ← Voclosporin · direct sigmoid Emax (Hill) effect | — | Abdel-Kahaar E et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01246-2](https://doi.org/10.1007/s40262-023-01246-2) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Mayo_2014_CNa](drugs/drug_voclosporin/pd_Mayo_2014_CNa.md) | calcineurin activity ← voclosporin · direct sigmoid Emax (Hill) effect | model (no simulator) | Mayo PR et al., Population PKPD of voclosporin in renal…, Journal of clinical pharmac… (2014) | [10.1002/jcph.237](https://doi.org/10.1002/jcph.237) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=voclosporin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CAMLG (binder), PPP3CA (inhibitor), PPP3R1 (inhibitor), PPP3R2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mayo_2014.pdf` | Mayo PR et al., Population PKPD of voclosporin in renal…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.237](https://doi.org/10.1002/jcph.237) | [24243422](https://pubmed.ncbi.nlm.nih.gov/24243422) | The paper explicitly reports population PK parameters (CL/F, V1) for voclosporin in human renal allograft patients. |
| `Mayo_2013.pdf` | Mayo PR et al., Voclosporin food effect and single oral…, Journal of clinical pharmac… (2013) | popPK | 5 | [10.1002/jcph.114](https://doi.org/10.1002/jcph.114) | [23736966](https://pubmed.ncbi.nlm.nih.gov/23736966) | Study reports non-compartmental PK parameters (Cmax, AUC) and PKPD metrics, but does not provide compartmental parameters (CL, V, t1/2) or population PK model values. |

<sub>queue written 2026-10-07T01:06:47.632044+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mayo_2013 | irrelevant | 5 | 3 | Study reports non-compartmental PK parameters (Cmax, AUC) and PKPD metrics, but does not provide compartmental parameters (CL, V, t1/2) or population PK model values. |
| popPK | Ogando_2022 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral activity (EC50 values against SARS-CoV-2) rather than pharmacokinetic disposition parameters (CL, V, etc.) for voclosporin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:06 UTC</sub>
