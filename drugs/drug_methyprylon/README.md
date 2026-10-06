<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;methyprylon&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methyprylon_Gwilt1985_reference&quot;,&quot;label&quot;:&quot;Gwilt_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# methyprylon

- **generic name:** methyprylon
- **ATC codes:** `N05CE02`
- **DrugBank:** [DB01107](https://go.drugbank.com/drugs/DB01107) · **PubChem:** [CID 4162](https://pubchem.ncbi.nlm.nih.gov/compound/4162)
- **molar mass:** 183.2475 g/mol (C10H17NO2) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Methyprylon is a sedative-hypnotic drug that was used to treat insomnia. It has been withdrawn from the market, largely because of its potential for abuse and dependence.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409558](https://www.wikidata.org/wiki/Q409558) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methyprylon | parent | 183.248 | C10H17NO2 | DrugBank | [4162](https://pubchem.ncbi.nlm.nih.gov/compound/4162) | Gwilt_1982, Gwilt_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:42 | 1:33 | 1/2/0 | 0/0/0 | 0/0/0 | 40,837/3,381 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gwilt_1985_reference](drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Gwilt PR et al., Pharmacokinetics of methyprylon followi…, Journal of pharmaceutical s… (1985) | [10.1002/jps.2600740920](https://doi.org/10.1002/jps.2600740920) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Gwilt_1982_caster_oil](drugs/drug_methyprylon/Methyprylon_Gwilt1982_caster_oil.md) | — | 2-compartment (no model) | 9 | Gwilt PR et al., The effect of oral castor oil on the di…, Canadian Anaesthetists' Soc… (1982) | [10.1007/BF03007530](https://doi.org/10.1007/BF03007530) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Gwilt_1982_control](drugs/drug_methyprylon/Methyprylon_Gwilt1982_control.md) | — | 2-compartment (no model) | 9 | Gwilt PR et al., The effect of oral castor oil on the di…, Canadian Anaesthetists' Soc… (1982) | [10.1007/BF03007530](https://doi.org/10.1007/BF03007530) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methyprylon) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gwilt_1985.pdf` | Gwilt PR et al., Pharmacokinetics of methyprylon followi…, Journal of pharmaceutical s… (1985) | popPK | 10 | [10.1002/jps.2600740920](https://doi.org/10.1002/jps.2600740920) | [2866242](https://pubmed.ncbi.nlm.nih.gov/2866242) | Original PK study of methyprylon in humans with numeric CL, Vd, and half-life values present in the abstract. |
| `Contos_1991.pdf` | Contos DA et al., Nonlinear elimination of methyprylon (n…, Journal of pharmaceutical s… (1991) | popPK | 6 | [10.1002/jps.2600800813](https://doi.org/10.1002/jps.2600800813) | [1686463](https://pubmed.ncbi.nlm.nih.gov/1686463) | Single overdosed patient case report with half-lives (4.4 h parent, 8 h metabolite) reported in text, but no CL/V or compartmental model parameters. |

<sub>queue written 2026-10-06T21:41:42.929560+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chang_1973 | irrelevant | 3 | 2 | This is a hemoperfusion/dialysis clearance study in intoxicated patients, not a disposition PK study; no numeric clearance values for methyprylon appear in the evidence. |
| popPK | Chang_1973_2 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Koffler_1978 | irrelevant | 2 | 1 | Methyprylon is only one of several overdose drugs treated with hemoperfusion; no quantitative PK parameters for methyprylon are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:41 UTC</sub>
