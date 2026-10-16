<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemether&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemether_Lohy2018_reference&quot;,&quot;label&quot;:&quot;Lohy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/Artemether_Lohy2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# artemether

- **generic name:** artemether
- **ATC codes:** `P01BE02`, `P01BF01`
- **DrugBank:** [DB06697](https://go.drugbank.com/drugs/DB06697) · **PubChem:** [CID 68911](https://pubchem.ncbi.nlm.nih.gov/compound/68911)
- **molar mass:** 298.3746 g/mol (C16H26O5) — DrugBank
- **groups:** approved, investigational

## About

Artemether is an antimalarial medicine of the artemisinin group, used to treat malaria, and is also reported to have activity against other protozoa and schistosomiasis. It is an approved medicine, appears on the WHO essential medicines list, and is used both alone and in combination antimalarial products worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416199](https://www.wikidata.org/wiki/Q416199) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| artemether | parent | 298.375 | C16H26O5 | DrugBank | [68911](https://pubchem.ncbi.nlm.nih.gov/compound/68911) | Ding_2026, Hoglund_2015, Lohy_2018, Sugiarto_2022, Zaloumis_2012 |
| desbutyl-lumefantrine | metabolite | — (mass units only) | — | — | — | — |
| desbutyllumefantrine | metabolite | — (mass units only) | — | — | — | — |
| desethylamodiaquine | metabolite | — (mass units only) | — | — | — | — |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Ding_2026, Hoglund_2015, Lohy_2018, Sugiarto_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:09 | 9:22 | 0/8/1 | 2/0/0 | 0/0/0 | 415,904/33,630 | einfracz / qwen3.8-27b | 11 | 0/11 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Lohy_2018_reference](drugs/drug_artemether/Artemether_Lohy2018_reference.md) | ▶ model + simulator | parent 2-cmt + 1 metabolite (1-cmt) | 12 | Lohy Das J et al., Population Pharmacokinetics of Artemeth…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.00518-18](https://doi.org/10.1128/AAC.00518-18) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ding_2026_reference](drugs/drug_artemether/Artemether_Ding2026_reference.md) | — | general linear (no model) | 31 | Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026) | [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.583). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hoglund_2015_reference](drugs/drug_artemether/Artemether_Hoglund2015_reference.md) | — | general linear (no model) | 5 | Hoglund RM et al., Artemether-lumefantrine co-administrati…, British journal of clinical… (2015) | [10.1111/bcp.12529](https://doi.org/10.1111/bcp.12529) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sugiarto_2022_reference](drugs/drug_artemether/Artemether_Sugiarto2022_reference.md) | — | general linear (no model) | 4 | Sugiarto SR et al., The pharmacokinetic properties of artem…, British journal of clinical… (2022) | [10.1111/bcp.15001](https://doi.org/10.1111/bcp.15001) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zaloumis_2012_ars_dha_b](drugs/drug_artemether/Artemether_Zaloumis2012_ars_dha_b.md) | — | 1-compartment (no model) | 3 | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zaloumis_2012_art](drugs/drug_artemether/Artemether_Zaloumis2012_art.md) | — | 1-compartment (no model) | 3 | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zaloumis_2012_lf](drugs/drug_artemether/Artemether_Zaloumis2012_lf.md) | — | 2-compartment (no model) | 5 | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zaloumis_2012_mq](drugs/drug_artemether/Artemether_Zaloumis2012_mq.md) | — | 1-compartment (no model) | 3 | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zaloumis_2012_pq_c](drugs/drug_artemether/Artemether_Zaloumis2012_pq_c.md) | — | 2-compartment (no model) | 5 | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kay_2013_parasite_killing](drugs/drug_artemether/pd_Kay_2013_parasite_killing.md) | parasite killing ← artemether · direct sigmoid Emax (Hill) effect | — | Kay K et al., Improving pharmacokinetic-pharmacodynam…, PLoS computational biology (2013) | [10.1371/journal.pcbi.1003151](https://doi.org/10.1371/journal.pcbi.1003151) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhou_2021_residual_infectivity](drugs/drug_artemether/pd_Zhou_2021_residual_infectivity.md) | % residual infectivity ← artemether · direct sigmoid Emax (Hill) effect | — | Zhou Y et al., In vitro efficacy of artemisinin-based…, Scientific reports (2021) | [10.1038/s41598-021-93361-y](https://doi.org/10.1038/s41598-021-93361-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=artemether).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer/substrate, `CYP2C19` inducer/substrate, `CYP2C9` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 74 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 9  ·  extracted 0  ·  needs_review 1  ·  rejected 8  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sugiarto_2022.pdf` | Sugiarto SR et al., The pharmacokinetic properties of artem…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15001](https://doi.org/10.1111/bcp.15001) | [34296469](https://pubmed.ncbi.nlm.nih.gov/34296469) | The abstract reports specific quantitative pharmacokinetic parameters for artemether, including AUC and the magnitude of auto-induction in clearance (25.2%). |
| `Sugiarto_2022_2.pdf` | Sugiarto SR et al., Pharmacokinetic properties of the antim…, International journal of an… (2022) | popPK | 10 | [10.1016/j.ijantimicag.2021.106482](https://doi.org/10.1016/j.ijantimicag.2021.106482) | [34818520](https://pubmed.ncbi.nlm.nih.gov/34818520) | The study describes a population pharmacokinetic model for artemether in humans, but no numeric parameter values (CL, V, etc.) are present in the provided abstract text. |

<sub>queue written 2026-10-14T18:01:10.035765+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akinrinade_2026 | irrelevant | 0 | 0 | The study models the pharmacokinetics of lumefantrine (the partner drug), not artemether, and no artemether PK parameters are reported. |
| popPK | Borrmann_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lumefantrine (the co-administered drug), not artemether, and does not report quantitative PK parameters for artemether. |
| popPK | Costa_2021 | irrelevant | 0 | 0 | The paper is a computational and in-vitro study identifying a novel compound, with artemether mentioned only as a comparator for potency (EC50), containing no PK data. |
| popPK | Francis_2020 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of lumefantrine, not artemether, and while artemether is mentioned as a companion drug, no quantitative PK parameters for artemether are reported. |
| popPK | Gendrot_2020 | irrelevant | 0 | 0 | The paper is an in vitro study of antimalarial drugs against SARS-CoV-2 and does not report pharmacokinetic disposition parameters for artemether. |
| popPK | Hassan_1992 | irrelevant | 0 | 0 | The study is an in vitro efficacy test of antimalarial drugs, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Kawuma_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dolutegravir, with artemether serving only as a co-administered drug to assess drug-drug interactions, and no quantitative PK parameters are provided for artemether itself. |
| popPK | Kay_2013 | irrelevant | 2 | 0 | The paper is a methodological PK/PD modeling study that does not report original quantitative PK parameters (CL, V, etc.) for artemether, noting that values are taken from external sources and detailed in Table S1 (not provided). |
| popPK | Kloprogge_2015 | irrelevant | 2 | 0 | The study reports population PK parameters for lumefantrine and its metabolite, but artemether is only the co-administered drug with no quantitative PK data provided. |
| popPK | Kloprogge_2018 | irrelevant | 1 | 0 | The study models the pharmacokinetics of lumefantrine and its metabolite desbutyl-lumefantrine, not artemether, which is only the co-administered partner in the fixed-dose combination. |
| popPK | Simeon_2024 | irrelevant | 0 | 0 | The study focuses on lumefantrine dosing optimization and simulations; artemether is mentioned only as part of the combination therapy or in passing, with no PK parameters reported for it. |
| popPK | Sugiarto_2022_2 | relevant | 10 | 0 | The study describes a population pharmacokinetic model for artemether in humans, but no numeric parameter values (CL, V, etc.) are present in the provided abstract text. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy assay against SARS-CoV-2, not a pharmacokinetic study, and does not report PK parameters (CL, V, etc.) for artemether. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:01 UTC</sub>
