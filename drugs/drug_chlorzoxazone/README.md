<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;chlorzoxazone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chlorzoxazone_Shi2021_reference&quot;,&quot;label&quot;:&quot;Shi_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chlorzoxazone/Chlorzoxazone_Shi2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# chlorzoxazone

- **generic name:** chlorzoxazone
- **ATC codes:** `M03BB03`
- **DrugBank:** [DB00356](https://go.drugbank.com/drugs/DB00356) · **PubChem:** [CID 2733](https://pubchem.ncbi.nlm.nih.gov/compound/2733)
- **molar mass:** 169.565 g/mol (C7H4ClNO2) — DrugBank
- **groups:** approved

## About

Chlorzoxazone is a centrally acting muscle relaxant used to relieve painful muscle spasms, cramps, and related muscle conditions. It is an approved medicine, though not authorised in the European Union, and is used in various countries, often in combination products for musculoskeletal pain.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3294630](https://www.wikidata.org/wiki/Q3294630) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlorzoxazone | parent | 169.565 | C7H4ClNO2 | DrugBank | [2733](https://pubchem.ncbi.nlm.nih.gov/compound/2733) | Zhou_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:37 | 0:39 | 1/1/0 | 0/0/0 | 0/0/0 | 48,229/7,907 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Shi_2021_reference](drugs/drug_chlorzoxazone/Chlorzoxazone_Shi2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Shi Y et al., Effects of Avitinib on CYP450 Enzyme Ac…, Drug design, development an… (2021) | [10.2147/DDDT.S323186](https://doi.org/10.2147/DDDT.S323186) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2011_reference](drugs/drug_chlorzoxazone/Chlorzoxazone_Zhou2011_reference.md) | — | general linear (no model) | 1 | Zhou J et al., Cardiac arrest and therapeutic hypother…, Drug metabolism and disposi… (2011) | [10.1124/dmd.111.040642](https://doi.org/10.1124/dmd.111.040642) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chlorzoxazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2D6` substrate, `CYP2E1` inhibitor/substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: KCNMA1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nolin_2003.pdf` | Nolin TD et al., Impaired 6-hydroxychlorzoxazone elimina…, Clinical pharmacology and t… (2003) | popPK | 10 | [10.1016/j.clpt.2003.09.003](https://doi.org/10.1016/j.clpt.2003.09.003) | [14663458](https://pubmed.ncbi.nlm.nih.gov/14663458) | The study develops a population pharmacokinetic model for chlorzoxazone, but no specific numeric parameter values are provided in the abstract or evidence text. |
| `Wan_2006.pdf` | Wan J et al., Chlorzoxazone metabolism is increased i…, The Journal of pharmacy and… (2006) | popPK | 10 | [10.1211/jpp.58.1.0007](https://doi.org/10.1211/jpp.58.1.0007) | [16393464](https://pubmed.ncbi.nlm.nih.gov/16393464) | The study is a PK investigation of chlorzoxazone in rats, but the evidence provided is only the abstract; specific numeric parameter values (CL, V, t1/2) are not listed in the text. |
| `Rajnarayana_2008.pdf` | Rajnarayana K et al., Influence of diosmin pretreatment on th…, Drug metabolism and drug in… (2008) | popPK | 9 | [10.1515/dmdi.2008.23.3-4.311](https://doi.org/10.1515/dmdi.2008.23.3-4.311) | [19326774](https://pubmed.ncbi.nlm.nih.gov/19326774) | The study reports quantitative PK parameters (AUC, Cmax, t1/2, CL/f) for chlorzoxaxone in humans, but specific numeric values are described as being in results/figures not included in the provided text snippet. |
| `Zhou_2011.pdf` | Zhou J et al., Cardiac arrest and therapeutic hypother…, Drug metabolism and disposi… (2011) | popPK | 5 | [10.1124/dmd.111.040642](https://doi.org/10.1124/dmd.111.040642) | [21868471](https://pubmed.ncbi.nlm.nih.gov/21868471) | Quantitative clearance and volume parameters for chlorzoxazone in rats are provided in the abstract. |

<sub>queue written 2026-10-07T02:37:00.647530+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2004 | irrelevant | 0 | 0 | The study investigates ion channel function in mouse cells using chlorzoxazone as a pharmacological agent, not its pharmacokinetics. |
| popPK | Ernstgård_2003 | irrelevant | 1 | 0 | Chlorzoxazone is used only as a diagnostic probe for CYP2E1 phenotype (via its metabolite ratio) in a study primarily focused on the toxicokinetics of 2-propanol; no quantitative PK parameters for chlorzoxazone itself are reported. |
| popPK | Kaneko_1990 | irrelevant | 0 | 0 | The provided evidence is empty/metadata and contains no pharmacokinetic data or chlorzoxazone information. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | The provided evidence contains no text from the paper, only software metadata. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel effects, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Nolin_2003 | relevant | 10 | 0 | The study develops a population pharmacokinetic model for chlorzoxazone, but no specific numeric parameter values are provided in the abstract or evidence text. |
| popPK | Rajnarayana_2008 | relevant | 9 | 2 | The study reports quantitative PK parameters (AUC, Cmax, t1/2, CL/f) for chlorzoxaxone in humans, but specific numeric values are described as being in results/figures not included in the provided text snippet. |
| popPK | Shi_2021 | irrelevant | 3 | 8 | Chlorzoxazone is used as a probe substrate to test the CYP2E1 inhibitory effects of the subject drug avitinib, not as the primary drug for PK parameter extraction. |
| popPK | Smith_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 1,3-butadiene, using chlorzoxazone only as a probe drug to determine CYP2E1 phenotype without reporting quantitative chlorzoxazone PK parameters. |
| popPK | Syme_2000 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of chlorzoxazone on ion channels in Xenopus oocytes and does not report pharmacokinetic disposition parameters. |
| popPK | Wan_2006 | relevant | 10 | 0 | The study is a PK investigation of chlorzoxazone in rats, but the evidence provided is only the abstract; specific numeric parameter values (CL, V, t1/2) are not listed in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:37 UTC</sub>
