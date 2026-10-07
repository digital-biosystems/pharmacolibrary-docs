<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;pralidoxime&quot;}]"></div>

# pralidoxime

- **generic name:** pralidoxime
- **ATC codes:** `V03AB04`, `V03AB54`
- **DrugBank:** [DB00733](https://go.drugbank.com/drugs/DB00733) · **PubChem:** [CID 5353894](https://pubchem.ncbi.nlm.nih.gov/compound/5353894)
- **molar mass:** 137.1592 g/mol (C7H9N2O) — DrugBank
- **groups:** approved, vet_approved

## About

Pralidoxime is an antidote that reactivates cholinesterase, used to treat poisoning by organophosphate pesticides and nerve agents. It is an approved medicine, also approved for veterinary use, and is widely available as an emergency antidote, typically given in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2735334](https://www.wikidata.org/wiki/Q2735334) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:23 | 0:32 | 0/0/0 | 1/0/0 | 0/0/0 | 23,176/1,701 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Houzé_2010_ChE_activity_2](drugs/drug_pralidoxime/pd_Houz_2010_ChE_activity_2.md) | blood cholinesterase activity (in vivo) ← pralidoxime · indirect response — drug stimulates the production of blood cholinesterase activity (in vivo) | — | Houzé P et al., Pharmacokinetics and toxicodynamics of…, Toxicological sciences : an… (2010) | [10.1093/toxsci/kfq152](https://doi.org/10.1093/toxsci/kfq152) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Houzé_2010_ChE_activity](drugs/drug_pralidoxime/pd_Houz_2010_ChE_activity.md) | whole-blood cholinesterase activity (diethylparaoxon-inactivated, in vitro reactivation) ← pralidoxime · indirect response — drug stimulates the production of whole-blood cholinesterase activity (diethylparaoxon-inactivated, in vitro reactivation) | — | Houzé P et al., Pharmacokinetics and toxicodynamics of…, Toxicological sciences : an… (2010) | [10.1093/toxsci/kfq152](https://doi.org/10.1093/toxsci/kfq152) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pralidoxime) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` activator | DrugBank actor |
| metabolism | liver | `BCHE` activator | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| — | blood | `ACHE` activator | DrugBank actor |
| — | neuromuscular junction | `ACHE` activator | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_1986.pdf` | Green MD et al., Pharmacokinetics of pralidoxime chlorid…, Life sciences (1986) | popPK | 8 | [10.1016/0024-3205(86)90405-4](https://doi.org/10.1016/0024-3205(86)90405-4) | [3784779](https://pubmed.ncbi.nlm.nih.gov/3784779) | Rat PK study with compartmental model parameters (Vd, CL, ka, k10) but numeric values are not shown in the abstract text. |
| `Houzé_2010.pdf` | Houzé P et al., Pharmacokinetics and toxicodynamics of…, Toxicological sciences : an… (2010) | popPK | 6 | [10.1093/toxsci/kfq152](https://doi.org/10.1093/toxsci/kfq152) | [20498006](https://pubmed.ncbi.nlm.nih.gov/20498006) | PK-TD modeling of pralidoxime in rats, but the evidence only gives an in vitro EC50 (4.67 mg/l); actual PK parameters (CL, V) are not shown and likely reside in the model description/figures not provided. |
| `Jeevarathinam_1988.pdf` | Jeevarathinam K et al., Pharmacokinetics of pralidoxime chlorid…, Die Pharmazie (1988) | popPK | 6 | not captured | [3393576](https://pubmed.ncbi.nlm.nih.gov/3393576) | Rat PK study of pralidoxime with two-compartment model, but no numeric parameter values (half-life, CL, V) appear in the evidence text. |

<sub>queue written 2026-10-07T19:23:01.231442+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbara_2009 | irrelevant | 2 | 0 | Pralidoxime is only a co-administered agent; the PK parameters reported (Cmax, AUC, compartmental models) are for diazepam/avizafone, not pralidoxime. |
| popPK | Abbara_2010 | relevant | 9 | 4 | Human population PK (two-compartment, first/zero-order absorption) of pralidoxime is reported, but the key parameter values (Vc, Ke, K12, K21, Ka) are in Table 4/5 which are not included; only AUC values appear in the evidence. |
| popPK | Capacio_2001 | irrelevant | 0 | 0 | The PK model and parameters are for diazepam, not pralidoxime, which is only a co-administered treatment agent. |
| popPK | Eterović_2011 | irrelevant | 0 | 0 | In-vitro hippocampal slice efficacy study; pralidoxime is only a comparator with no PK parameters reported. |
| popPK | Green_1986 | relevant | 8 | 4 | Rat PK study with compartmental model parameters (Vd, CL, ka, k10) but numeric values are not shown in the abstract text. |
| popPK | Hong_2013 | irrelevant | 0 | 0 | The study reports PK parameters for MMB4 DMS, a different drug; pralidoxime is only mentioned as the current fielded comparator, with no pralidoxime PK data. |
| popPK | Horn_2023 | irrelevant | 0 | 0 | In-vitro hepatotoxicity study with no PK disposition parameters for pralidoxime. |
| popPK | Houzé_2010 | relevant | 6 | 3 | PK-TD modeling of pralidoxime in rats, but the evidence only gives an in vitro EC50 (4.67 mg/l); actual PK parameters (CL, V) are not shown and likely reside in the model description/figures not provided. |
| popPK | Jeevarathinam_1988 | relevant | 6 | 3 | Rat PK study of pralidoxime with two-compartment model, but no numeric parameter values (half-life, CL, V) appear in the evidence text. |
| popPK | Moeller_2019 | irrelevant | 0 | 0 | The study reports PK of ketamine/norketamine in rats; pralidoxime is only mentioned as part of the co-administered SOC, with no pralidoxime parameters. |
| popPK | Reymond_2018 | irrelevant | 2 | 0 | PK modeling is of HI-6, not pralidoxime, which is only a comparator; no pralidoxime disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
