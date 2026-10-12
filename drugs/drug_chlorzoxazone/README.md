<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;chlorzoxazone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chlorzoxazone_Shi2021_reference&quot;,&quot;label&quot;:&quot;Shi_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chlorzoxazone/Chlorzoxazone_Shi2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# chlorzoxazone

- **generic name:** chlorzoxazone
- **ATC codes:** `M03BB03`
- **DrugBank:** [DB00356](https://go.drugbank.com/drugs/DB00356) · **PubChem:** [CID 2733](https://pubchem.ncbi.nlm.nih.gov/compound/2733)
- **molar mass:** 169.565 g/mol (C7H4ClNO2) — DrugBank
- **groups:** approved

## About

Chlorzoxazone is a centrally acting muscle relaxant used to relieve painful muscle spasms, cramps, and related muscle conditions. It is an approved medicine, though not authorised in the European Union, and is used in various countries, often in combination products for musculoskeletal pain.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3294630](https://www.wikidata.org/wiki/Q3294630) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlorzoxazone | parent | 169.565 | C7H4ClNO2 | DrugBank | [2733](https://pubchem.ncbi.nlm.nih.gov/compound/2733) | Zhou_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:37 | 0:39 | 0/1/1 | 0/0/0 | 0/0/0 | 48,229/7,907 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Shi_2021_reference](drugs/drug_chlorzoxazone/Chlorzoxazone_Shi2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Shi Y et al., Effects of Avitinib on CYP450 Enzyme Ac…, Drug design, development an… (2021) | [10.2147/DDDT.S323186](https://doi.org/10.2147/DDDT.S323186) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2011_reference](drugs/drug_chlorzoxazone/Chlorzoxazone_Zhou2011_reference.md) | — | general linear (no model) | 1 | Zhou J et al., Cardiac arrest and therapeutic hypother…, Drug metabolism and disposi… (2011) | [10.1124/dmd.111.040642](https://doi.org/10.1124/dmd.111.040642) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chlorzoxazone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2D6` substrate, `CYP2E1` inhibitor/substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: KCNMA1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
