<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;choline fenofibrate&quot;}]"></div>

# choline fenofibrate

- **generic name:** choline fenofibrate
- **ATC codes:** `C10AB11`
- **DrugBank:** [DB13873](https://go.drugbank.com/drugs/DB13873) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Choline fenofibrate, a fibrate, is used to treat abnormal blood lipid levels. It is an approved medicine, used as a lipid-modifying agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27259379](https://www.wikidata.org/wiki/Q27259379) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 01:12 | 0:21 | 0/0/0 | 1/0/0 | 0/0/0 | 30,400/1,283 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rosal_2010_bioluminescence_inhibition](drugs/drug_choline_fenofibrate/pd_Rosal_2010_bioluminescence_inhibition.md) | bioluminescence inhibition ← fenofibric acid · direct sigmoid Emax (Hill) effect | — | Rosal R et al., Ecotoxicity assessment of lipid regulat…, Environmental science and p… (2010) | [10.1007/s11356-009-0137-1](https://doi.org/10.1007/s11356-009-0137-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rosal_2010_bioluminescence_inhibition_2](drugs/drug_choline_fenofibrate/pd_Rosal_2010_bioluminescence_inhibition_2.md) | bioluminescence inhibition ← fenofibric acid · direct linear effect | — | Rosal R et al., Ecotoxicity assessment of lipid regulat…, Environmental science and p… (2010) | [10.1007/s11356-009-0137-1](https://doi.org/10.1007/s11356-009-0137-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=choline_fenofibrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | stomach | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FABP1 (inhibitor), MMP25 (unknown), NR1I2 (partial agonist), PPARA (target), PPARD (unknown), PPARG (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hassan_2021 | irrelevant | 0 | 0 | The study evaluates novel chalcone fibrate hybrids as PPAR alpha agonists using fenofibrate only as a positive control, and does not report pharmacokinetic parameters for choline fenofibrate. |
| popPK | Kuwabara_2004 | irrelevant | 0 | 0 | The study focuses on a novel PPAR-alpha agonist (NS-220) in mice, using fenofibrate only as a positive control without reporting any pharmacokinetic parameters. |
| popPK | Rosal_2010 | irrelevant | 0 | 0 | The paper reports ecotoxicity (EC50) values for fibrate compounds in aquatic organisms, not pharmacokinetic parameters for choline_fenofibrate. |
| popPK | Xu_2006 | irrelevant | 0 | 0 | The study is a mechanistic investigation of myocardial protection in pigs and does not report pharmacokinetic parameters (CL, V, ka, etc.) for choline fenofibrate or fenofibrate. |
| popPK | Yun_2006 | irrelevant | 1 | 1 | The study investigates fenofibrate (specifically its metabolite fenofibric acid), which is a different drug entity from choline fenofibrate, and does not report parameters for choline fenofibrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
