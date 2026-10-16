<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;mefloquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mefloquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rattanapunya2015_reference&quot;,&quot;label&quot;:&quot;Rattanapunya_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rattanapunya2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rufener2018_reference&quot;,&quot;label&quot;:&quot;Rufener_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rufener2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# mefloquine

- **generic name:** mefloquine
- **ATC codes:** `P01BC02`, `P01BF02`
- **DrugBank:** [DB00358](https://go.drugbank.com/drugs/DB00358) · **PubChem:** [CID 4046](https://pubchem.ncbi.nlm.nih.gov/compound/4046)
- **molar mass:** 378.3122 g/mol (C17H16F6N2O) — DrugBank
- **groups:** approved

## About

Mefloquine is an antimalarial drug used to treat and prevent malaria, including forms caused by Plasmodium falciparum and Plasmodium vivax. It remains an approved medicine and appears on the WHO list of essential medicines, so it is still used worldwide for malaria treatment and prophylaxis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q736270](https://www.wikidata.org/wiki/Q736270) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mefloquine | parent | 378.312 | C17H16F6N2O | DrugBank | [4046](https://pubchem.ncbi.nlm.nih.gov/compound/4046) | Mim_2026, Rufener_2018, Saeheng_2023, Simpson_1999, Staehli_2013, Svensson_2002 |
| artesunate | metabolite | 384.425 | C19H28O8 | PubChem | [6917864](https://pubchem.ncbi.nlm.nih.gov/compound/6917864) | Saeheng_2023 |
| carboxymefloquine | metabolite | — (mass units only) | — | — | — | — |
| desbutyl-lumefantrine | metabolite | 472.834 | C26H24Cl3NO | PubChem | [9934522](https://pubchem.ncbi.nlm.nih.gov/compound/9934522) | Staehli_2013 |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Saeheng_2023 |
| lumefantrine | metabolite | 528.942 | C30H32Cl3NO | PubChem | [5311253](https://pubchem.ncbi.nlm.nih.gov/compound/5311253) | Staehli_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 01:00 | 6:22 | 0/10/4 | 1/0/1 | 0/0/0 | 376,873/27,386 | einfracz / qwen3.8-27b | 13 | 12/1 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>blocking: unreported model parameter default(s): k21</sub><br><sub>route_to: `scholar`</sub> | [Cherkaoui-Rbati_2023_reference](drugs/drug_mefloquine/Mefloquine_CherkaouiRbati2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Cherkaoui-Rbati MH et al., A pharmacokinetic-pharmacodynamic model…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12875](https://doi.org/10.1002/psp4.12875) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Rattanapunya_2015_reference](drugs/drug_mefloquine/Mefloquine_Rattanapunya2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Rattanapunya S et al., Pharmacokinetic interactions between ar…, Malaria journal (2015) | [10.1186/s12936-015-0916-8](https://doi.org/10.1186/s12936-015-0916-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Rufener_2018_reference](drugs/drug_mefloquine/Mefloquine_Rufener2018_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Rufener R et al., Activity of mefloquine and mefloquine d…, International journal for p… (2018) | [10.1016/j.ijpddr.2018.06.004](https://doi.org/10.1016/j.ijpddr.2018.06.004) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Svensson_2002_reference](drugs/drug_mefloquine/Mefloquine_Svensson2002_reference.md) | — | 1-compartment (no model) | 3 | Svensson US et al., Population pharmacokinetic and pharmaco…, European journal of clinica… (2002) | [10.1007/s00228-002-0485-y](https://doi.org/10.1007/s00228-002-0485-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Mim_2026_reference](drugs/drug_mefloquine/Mefloquine_Mim2026_reference.md) | — | general linear (no model) | 3 | Mim SR et al., Pharmacokinetic and pharmacodynamic mod…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01717-25](https://doi.org/10.1128/aac.01717-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ramharter_2019_reference](drugs/drug_mefloquine/Mefloquine_Ramharter2019_reference.md) | — | parent + metabolite (no model) | 0 | Ramharter M et al., Population Pharmacokinetics of Mefloqui…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.01113-18](https://doi.org/10.1128/AAC.01113-18) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Saeheng_2023_reference](drugs/drug_mefloquine/Mefloquine_Saeheng2023_reference.md) | — | parent + metabolite (no model) | 6 | Saeheng T et al., Prediction of improved antimalarial che…, PloS one (2023) | [10.1371/journal.pone.0282099](https://doi.org/10.1371/journal.pone.0282099) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Simpson_1999_reference](drugs/drug_mefloquine/Mefloquine_Simpson1999_reference.md) | — | 1-compartment (no model) | 5 | Simpson JA et al., Population pharmacokinetics of mefloqui…, Clinical pharmacology and t… (1999) | [10.1016/S0009-9236(99)70010-X](https://doi.org/10.1016/S0009-9236(99)70010-X) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Staehli_2013_am](drugs/drug_mefloquine/Mefloquine_Staehli2013_am.md) | — | general linear (no model) | 5 | Staehli Hodel EM et al., Population pharmacokinetics of mefloqui…, Malaria journal (2013) | [10.1186/1475-2875-12-235](https://doi.org/10.1186/1475-2875-12-235) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Staehli_2013_dhae](drugs/drug_mefloquine/Mefloquine_Staehli2013_dhae.md) | — | general linear (no model) | 5 | Staehli Hodel EM et al., Population pharmacokinetics of mefloqui…, Malaria journal (2013) | [10.1186/1475-2875-12-235](https://doi.org/10.1186/1475-2875-12-235) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Staehli_2013_dlfg](drugs/drug_mefloquine/Mefloquine_Staehli2013_dlfg.md) | — | general linear (no model) | 5 | Staehli Hodel EM et al., Population pharmacokinetics of mefloqui…, Malaria journal (2013) | [10.1186/1475-2875-12-235](https://doi.org/10.1186/1475-2875-12-235) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Staehli_2013_mq](drugs/drug_mefloquine/Mefloquine_Staehli2013_mq.md) | — | general linear (no model) | 5 | Staehli Hodel EM et al., Population pharmacokinetics of mefloqui…, Malaria journal (2013) | [10.1186/1475-2875-12-235](https://doi.org/10.1186/1475-2875-12-235) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Staehli_2013_ppq](drugs/drug_mefloquine/Mefloquine_Staehli2013_ppq.md) | — | general linear (no model) | 5 | Staehli Hodel EM et al., Population pharmacokinetics of mefloqui…, Malaria journal (2013) | [10.1186/1475-2875-12-235](https://doi.org/10.1186/1475-2875-12-235) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Staehli_2013_reference](drugs/drug_mefloquine/Mefloquine_Staehli2013_reference.md) | — | general linear (no model) | 5 | Staehli Hodel EM et al., Population pharmacokinetics of mefloqui…, Malaria journal (2013) | [10.1186/1475-2875-12-235](https://doi.org/10.1186/1475-2875-12-235) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Zaloumis_2012_k](drugs/drug_mefloquine/pd_Zaloumis_2012_k.md) | parasite kill rate constant ← mefloquine · direct sigmoid Emax (Hill) effect | — | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mim_2026_parasite_count](drugs/drug_mefloquine/pd_Mim_2026_parasite_count.md) | parasitemia ← mefloquine · indirect response — drug inhibits the production of parasitemia | model (no simulator) | Mim SR et al., Pharmacokinetic and pharmacodynamic mod…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01717-25](https://doi.org/10.1128/aac.01717-25) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mefloquine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADORA2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 89 matched, 20 returned
- **screened:** 10  ·  **relevant:** 9
- **records:** 14  ·  extracted 0  ·  needs_review 4  ·  rejected 10  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ramharter_2019.pdf` | Ramharter M et al., Population Pharmacokinetics of Mefloqui…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.01113-18](https://doi.org/10.1128/AAC.01113-18) | [30455233](https://pubmed.ncbi.nlm.nih.gov/30455233) | The study is a population PK analysis of mefloquine in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract/evidence text, though a modeling tool is mentioned. |
| `Simpson_1999.pdf` | Simpson JA et al., Population pharmacokinetics of mefloqui…, Clinical pharmacology and t… (1999) | popPK | 10 | [10.1016/S0009-9236(99)70010-X](https://doi.org/10.1016/S0009-9236(99)70010-X) | [10579474](https://pubmed.ncbi.nlm.nih.gov/10579474) | Quantitative V/F values are provided, but specific clearance and rate constants appear to be summarized or missing from the text. |
| `Svensson_2002.pdf` | Svensson US et al., Population pharmacokinetic and pharmaco…, European journal of clinica… (2002) | popPK | 10 | [10.1007/s00228-002-0485-y](https://doi.org/10.1007/s00228-002-0485-y) | [12185558](https://pubmed.ncbi.nlm.nih.gov/12185558) | The paper reports quantitative population PK parameters (clearance) for mefloquine enantiomers in humans with numeric values provided in the abstract. |
| `Hoshen_2001.pdf` | Hoshen MB et al., Pharmacokinetic-pharmacodynamic modelli…, Parasitology 123(Pt 4):337–… (2001) | popPK | 8 | [10.1017/s003118200100854x](https://doi.org/10.1017/s003118200100854x) | [11676365](https://pubmed.ncbi.nlm.nih.gov/11676365) | The paper describes a PK-PD model for mefloquine in humans, but the specific numeric parameter values are not present in the provided text, which only summarizes the methodology and outcomes. |

<sub>queue written 2026-10-15T00:55:29.898185+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | The paper models the PKPD of DSM265, a new antimalarial candidate; mefloquine is only mentioned as a comparator for adverse effects and is not the subject of the pharmacokinetic analysis. |
| popPK | Hoshen_2001 | relevant | 8 | 0 | The paper describes a PK-PD model for mefloquine in humans, but the specific numeric parameter values are not present in the provided text, which only summarizes the methodology and outcomes. |
| popPK | Kay_2013 | irrelevant | 2 | 0 | The paper focuses on PK/PD modelling methodology for artemisinin-based combination therapies; while mefloquine is mentioned as a partner drug in ACTs, the detailed pharmacokinetic parameters provided and modeled are for artemisinin derivatives, and specific quantitative disposition parameters for mefloquine are not reported. |
| popPK | Lohy_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of artesunate and dihydroartemisinin, with mefloquine only serving as a co-administered partner drug in the combination therapy regimen. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | The study investigates the in vitro antiviral activity of mefloquine against coronaviruses, not its pharmacokinetic or disposition parameters. |
| popPK | Sacramento_2022 | relevant | 6 | 2 | The paper develops and validates a human PBPK model for mefloquine, but the specific quantitative parameter values (CL, V, Q, etc.) are listed in Table S1 which is not included in the provided evidence. |
| popPK | Saeheng_2023 | relevant | 8 | 3 | The paper describes a population PK model for mefloquine, but the explicit numeric values provided in the extracted tables (Table 2) correspond to Artesunate and Dihydroartemisinin, while the specific PK parameter values for Mefloquine are referenced in the text (as being in Table 2 or S1 File) but not clearly present in the extracted table structure provided. |
| popPK | Simpson_2000 | relevant | 3 | 0 | The abstract confirms the use of population pharmacokinetic modeling for mefloquine, but no specific numeric parameter values (CL, V, etc.) are provided in the evidence, which appears to consist only of the abstract. |
| popPK | Zaloumis_2012 | irrelevant | 2 | 1 | This is a PK-PD simulation study using mefloquine as one component of combination therapy, and the specific PK parameter values are cited from external literature rather than presented as original findings in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:55 UTC</sub>
